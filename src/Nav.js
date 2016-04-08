import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './Nav.css';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeIndex : 0,
			tabWidth : 0,
			left:0,
			transform : null,
		}
		this.moveIndicator = this.moveIndicator.bind(this);
	}

	renderNavTabs() {
		const navTabs = [];
		const panels = this.props.panels;
		React.Children.forEach(panels,(panel,index) => {
			navTabs.push(<li className={"nav-item " + (this.state.activeIndex === index ? 'active' : '')} key={index} onClick={this.onTabClick.bind(this,index)}>{panel.props.tab}</li>)
		})
		return navTabs;
	}

	componentWillUpdate(nextProps,nextState) {
		this.moveIndicator(this.state.activeIndex,nextState.activeIndex);
		if(nextProps.activeIndex !== this.state.activeIndex){
			this.setState({
				activeIndex : nextProps.activeIndex
			})
		}
	}

	componentDidMount() {
		let totalWidth = ReactDOM.findDOMNode(this).offsetWidth;
		let tabCount = this.props.panels.length;
		this.setState({
			tabWidth : totalWidth / tabCount
		});
	}

	moveIndicator(previousIndex,nextIndex) {
		if(previousIndex === nextIndex) return;
		let activeIndex = this.state.activeIndex;
		let tabWidth = this.state.tabWidth;
		let translateX = tabWidth * nextIndex;
		let scaleX = 1 + Math.abs(nextIndex - previousIndex)/2;
		this.setState({
			left : `${translateX}px`,
			transform : `scale3D(${scaleX},1,1) translateZ(0)`
		});
		setTimeout(()=>{
			this.setState({
				transform: `scale3D(1,1,1) translateZ(0)`
			})
		},100);
	}

	onTabClick(index) {
		this.setState({
			activeIndex : index
		});
		this.props.onTabClick(index);
	}

	render() {
		return (
			<ul className="nav">
				{this.renderNavTabs.apply(this)}
				<div className="indicator" style={{left:this.state.left,transform:this.state.transform}}/>	
			</ul>
		);
	}
}