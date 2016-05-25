import React from 'react';
import TabPanel from './TabPanel.js';
import Nav from './Nav.js';
import './ReactTabs.css';
import HorizontalWrapper from './HorizontalWrapper.js';
import ReactDOM from 'react-dom';

class ReactTabs extends React.Component {

	constructor(props) {
		super(props);
		this.bindFunc();
		this.state = {
			activeIndex : 0,
			tabWidth : 0,
			scrollHeight : 0,
		};
	}

	bindFunc() {
		this.renderChildren = this.renderChildren.bind(this);
		this.onTabClick = this.onTabClick.bind(this);
	}

	renderChildren() {
		const children = this.props.children;
		let newChildren = [];
		React.Children.forEach(children,(child,index) => {
			newChildren.push(React.cloneElement(child,{isActive:index === this.state.activeIndex,width:this.state.tabWidth}))
		})
		// newChildren = newChildren.filter((child,index)=>{
		// 	return index === this.state.activeIndex;
		// })
		return newChildren;
	}

	componentDidMount() {
		this.setState({
			tabWidth : ReactDOM.findDOMNode(this).offsetWidth,
			tabCount : this.props.children.length,
		});
		if(this.props.autoHeight) {
		 let scrollHeight = ReactDOM.findDOMNode(this.refs.scroller).querySelector('.horizontal-wrapper').scrollHeight;
		 let offsetHeight = ReactDOM.findDOMNode(this.refs.scroller).querySelector('.horizontal-wrapper').offsetHeight;
		 this.setState({
		 	scrollHeight: Math.max(scrollHeight,offsetHeight)
		 });
		}
	}

	onTabClick(index) {
		this.setState({
			activeIndex : index
		});
	}

	render() {
		let tabHeight = this.props.tabHeight;
		if(this.props.autoHeight) {
			tabHeight = this.state.scrollHeight;
		}
		return (
			<div className="tabs">
				<Nav panels={this.props.children} onTabClick={this.onTabClick.bind(this)} activeIndex={this.state.activeIndex}/>
				<HorizontalWrapper ref="scroller" indicator={this.props.indicator} onTabClick={this.onTabClick} tabHeight={tabHeight} tabWidth={this.state.tabWidth}  tabCount={this.state.tabCount}  activeIndex={this.state.activeIndex}>
					{this.renderChildren()}
				</HorizontalWrapper>
			</div>	
		);
	}
}

ReactTabs.TabPanel = TabPanel;

export default ReactTabs;