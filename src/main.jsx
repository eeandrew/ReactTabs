import ReactDom from 'react-dom';
import React from 'react';
import ReactTabs from './ReactTabs.jsx';

let TabPanel = ReactTabs.TabPanel;

class App extends React.Component {
	render() {
		return (
			<ReactTabs tabHeight="200px">
				<TabPanel tab="Tab1" key={1}><Tab bg="rgb(251,73,1)">Tab1</Tab></TabPanel>
				<TabPanel tab="Tab2" key={2}><Tab bg="rgb(253,181,36)">Tab2</Tab></TabPanel>
				<TabPanel tab="Tab3" key={3}><Tab bg="rgb(41,201,51)">Tab3</Tab></TabPanel>
			</ReactTabs>
		);
	}
}

class Tab extends React.Component {
	render() {
		return (
			<div style={{height:'100%',width:'100%',background:this.props.bg}}>{this.props.children}</div>	
		)
	}
}



ReactDom.render(<App/>,document.getElementById('app'))