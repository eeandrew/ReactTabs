import React from 'React';
import classnames from 'classnames';
import './TabPanel.css';

export default class TabPanel extends React.Component {
	render() {
		let classes = classnames({
			active : this.props.isActive,
			[`tab-panel`] : true,
		})
		let widthStyle = {
			width : this.props.width + 'px'
		}
		return <li className={classes} style={widthStyle}>{this.props.children}</li>
	}
}