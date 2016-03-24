import ReactDom from 'react-dom';
import React from 'react';
import ReactTabs from './ReactTabs.jsx';

let TabPanel = ReactTabs.TabPanel;

class App extends React.Component {
	render() {
		return (
			<ReactTabs>
				<TabPanel tab="Tab1" key={1}>1</TabPanel>
				<TabPanel tab="Tab2" key={2}>2</TabPanel>
				<TabPanel tab="Tab2" key={3}>3</TabPanel>
			</ReactTabs>
		);
	}
}


ReactDom.render(<App/>,document.getElementById('app'))