import React from 'react';
import TabPanel from './TabPanel.jsx';
import Nav from './Nav.jsx';
import './ReactTabs.css';
import HorizontalWrapper from './HorizontalWrapper.jsx';
import ReactDOM from 'react-dom';

class ReactTabs extends React.Component {

	constructor(props) {
		super(props);
		this.bindFunc();
		this.state = {
			activeIndex : 0,
			tabWidth : 0,
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
	}

	onTabClick(index) {
		this.setState({
			activeIndex : index
		});
	}

	render() {
		return (
			<div className="tabs">
				<Nav panels={this.props.children} onTabClick={this.onTabClick.bind(this)} activeIndex={this.state.activeIndex}/>
				<HorizontalWrapper onTabClick={this.onTabClick} tabHeight={this.props.tabHeight} tabWidth={this.state.tabWidth}  tabCount={this.state.tabCount}  activeIndex={this.state.activeIndex}>
					{this.renderChildren()}
				</HorizontalWrapper>
			</div>	
		);
	}
}

ReactTabs.TabPanel = TabPanel;

export default ReactTabs;