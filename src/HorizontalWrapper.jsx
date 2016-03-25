import React from 'react';
import ReactDOM from 'react-dom';
import './HorizontalWrapper.css';

export default class HorizontalWrapper extends React.Component {
	componentDidMount() {
		this.scroller = new IScroll(ReactDOM.findDOMNode(this),{
			scrollX : true,
			scrollY : false,
			scrollbars : false,
			probeType : 3,
			momentum : false,
		});
		setTimeout(()=>{
			this.scroller.refresh()
		},1)
	}

	componentWillUpdate(nextProps) {
		this.scroller.scrollTo(-(this.props.tabWidth * nextProps.activeIndex),0,200);
	}

	render() {
		let scrollerStyle = {
			width : this.props.tabWidth * this.props.tabCount  + 'px'
		}
		return (
			<div className="horizontal-wrapper">
				<div className="scroller-wrapper" style={scrollerStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
