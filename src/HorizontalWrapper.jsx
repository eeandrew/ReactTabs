import React from 'react';
import ReactDOM from 'react-dom';
import './HorizontalWrapper.css';

export default class HorizontalWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.onIscrollTouchEnd = this.onIscrollTouchEnd.bind(this);
		this.state = {
			activeIndex : 0
		};
	}

	componentDidMount() {
		this.scroller = new IScroll(ReactDOM.findDOMNode(this),{
			scrollX : true,
			scrollY : false,
			scrollbars : false,
			probeType : 3,
			momentum : false,
		});
		this.setState({
			activeIndex : this.props.activeIndex
		});
		setTimeout(()=>{
			this.scroller.refresh()
		},1)
		this.scroller.on('iscrollTouchEnd',this.onIscrollTouchEnd)
	}

	onIscrollTouchEnd() {
		let nextIndex = this.state.activeIndex
		if(this.scroller.x >= 0) {
			if(nextIndex === 1) {
				nextIndex = 0
			}
		}else if(Math.abs(this.scroller.x) >= (this.props.tabWidth/2 + nextIndex*this.props.tabWidth)) {
			++nextIndex
			
		}else if(Math.abs(this.scroller.x) < (nextIndex*this.props.tabWidth - this.props.tabWidth/2)) {
			--nextIndex
		}
		nextIndex >= this.props.tabCount ? nextIndex=(this.props.tabCount - 1) : nextIndex < 0 ? nextIndex=0 :nextIndex
		this.setState({
			activeIndex : nextIndex,
		});
		this.props.onTabClick(nextIndex);
		this.scroller.scrollTo(this.props.tabWidth*nextIndex*-1,0,300);
	}

	componentWillUpdate(nextProps,nextStates) {
		if(nextProps.activeIndex !== this.props.activeIndex){
			this.scroller.scrollTo(-(this.props.tabWidth * nextProps.activeIndex),0,200);
		}
	}

	render() {
		let scrollerStyle = {
			width : this.props.tabWidth * this.props.tabCount  + 'px'
		}
		return (
			<div className="horizontal-wrapper" style={{height:this.props.tabHeight}}>
				<div className="scroller-wrapper" style={scrollerStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
