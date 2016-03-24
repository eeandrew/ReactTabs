import React from 'React';
import classnames from 'classnames';
import './TabPanel.css';

export default class TabPanel extends React.Component {
	render() {
		let classes = classnames({
			active : this.props.isActive,
			[`tab-panel`] : true,
		})
		return <li className={classes}>{this.props.children}</li>
	}
}