import React from 'react';
import classnames from 'classnames';
import './Nav.css';

export default class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeIndex : 0
		}
	}

	renderNavTabs() {
		const navTabs = [];
		const panels = this.props.panels;
		React.Children.forEach(panels,(panel,index) => {
			navTabs.push(<li className={"nav-item " + (this.state.activeIndex === index ? 'active' : '')} key={index} onClick={this.onTabClick.bind(this,index)}>{panel.props.tab}</li>)
		})
		return navTabs;
	}

	componentWillUpdate(nextProps) {
		if(nextProps.activeIndex !== this.state.activeIndex){
			this.setState({
				activeIndex : nextProps.activeIndex
			})
		}

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
			</ul>
		);
	}
}