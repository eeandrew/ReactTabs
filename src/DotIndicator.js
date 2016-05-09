import React from 'react';
import ReactDOM from 'react-dom';
import './DotIndicator.css';
export default class DotIndicator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style:{
        marginLeft:'0'
      }
    }
    this.adjustMargin = this.adjustMargin.bind(this);
  }

  componentDidMount() {
    this.adjustMargin();
  }

  adjustMargin() {
    let parentWidth = ReactDOM.findDOMNode(this).parentNode.offsetWidth;
    let selfWidth = ReactDOM.findDOMNode(this).offsetWidth;
    let marginLeft = (parentWidth - selfWidth) / 2;
    this.setState({
      style: {
        marginLeft: marginLeft+'px'
      }
    })
  }

  getPageIndicator() {
    var pageIndicator = [];
    for(let i=0;i<this.props.count;i++) {
      pageIndicator.push(<div className="dotty inactive" key={i}></div>)
    }
    return pageIndicator;
  }

  render() {
    return (
      <div id="indicator" className="dotty-indicator" style={this.state.style}>
        <div className="dotty "></div>
        {this.getPageIndicator.apply(this)}
      </div>
    );
  }
}

