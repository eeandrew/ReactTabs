import React from 'react';
import './Nav.css';

export default class Nav extends React.Component {


	renderNavTabs() {
		const navTabs = [];
		const panels = this.props.panels;
		React.Children.forEach(panels,(panel,index) => {
			navTabs.push(<li className="nav-item">{panel.props.tab}</li>)
		})
		return navTabs;
	}

	render() {
		return (
			<ul className="nav">
				{this.renderNavTabs.apply(this)}
			</ul>
		);
	}
}