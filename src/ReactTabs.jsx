import React from 'react';
import TabPanel from './TabPanel.jsx';
import Nav from './Nav.jsx';
import './ReactTabs.css';

class ReactTabs extends React.Component {

	constructor(props) {
		super(props);
		this.bindFunc();
		this.state = {
			activeIndex : 0
		};
	}

	bindFunc() {
		this.renderChildren = this.renderChildren.bind(this);
	}

	renderChildren() {
		const children = this.props.children;
		const newChildren = [];
		React.Children.forEach(children,(child,index) => {
			newChildren.push(React.cloneElement(child,{isActive:index === this.state.activeIndex}))
		})
		return newChildren;
	}

	onTabClick(index) {
		this.setState({
			activeIndex : index
		});
	}

	render() {
		return (
			<div className="tabs">
				<Nav panels={this.props.children} onTabClick={this.onTabClick.bind(this)}/>
				{this.renderChildren()}
			</div>	
		);
	}
}

ReactTabs.TabPanel = TabPanel;

export default ReactTabs;