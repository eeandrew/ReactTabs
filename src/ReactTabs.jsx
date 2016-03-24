import React from 'react';
import TabPanel from './TabPanel.jsx';
import Nav from './Nav.jsx';
import './ReactTabs.css';

class ReactTabs extends React.Component {

	constructor(props) {
		super(props);
		this.bindFunc();
	}

	bindFunc() {
		this.renderChildren = this.renderChildren.bind(this);
	}

	renderChildren() {
		const children = this.props.children;
		const newChildren = [];
		React.Children.forEach(children,(child,index) => {
			newChildren.push(React.cloneElement(child,{isActive:index === 1}))
		})
		return newChildren;
	}

	render() {
		return (
			<div className="tabs">
				<Nav panels={this.props.children}/>
				{this.renderChildren()}
			</div>	
		);
	}
}

ReactTabs.TabPanel = TabPanel;

export default ReactTabs;