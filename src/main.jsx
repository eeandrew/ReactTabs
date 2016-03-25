import ReactDom from 'react-dom';
import React from 'react';
import ReactTabs from './ReactTabs.jsx';

let TabPanel = ReactTabs.TabPanel;

class App extends React.Component {
	render() {
		return (
			<ReactTabs>
				<TabPanel tab="Tab1" key={1}><Tab1/></TabPanel>
				<TabPanel tab="Tab2" key={2}><Tab2/></TabPanel>
				<TabPanel tab="Tab2" key={3}><Tab3/></TabPanel>
			</ReactTabs>
		);
	}
}

class Tab1 extends React.Component {
	render() {
		return (
			<div style={{height:'200px',width:'100%'}}>Tab1</div>	
		)
	}
}

class Tab2 extends React.Component {
	render() {
		return (
			<div style={{height:'300px',width:'100%'}}>Tab2</div>	
		)
	}
}

class Tab3 extends React.Component {
	render() {
		return (
			<div style={{height:'150px',width:'100%'}}>Tab3</div>	
		)
	}
}


ReactDom.render(<App/>,document.getElementById('app'))