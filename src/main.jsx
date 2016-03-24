import ReactDom from 'react-dom';
import React from 'react';
import ReactTabs from './ReactTabs.jsx';

let TabPanel = ReactTabs.TabPanel;

class App extends React.Component {
	render() {
		return (
			<ReactTabs>
				<TabPanel key={1}>1</TabPanel>
				<TabPanel key={2}>2</TabPanel>
				<TabPanel key={3}>3</TabPanel>
			</ReactTabs>
		);
	}
}


ReactDom.render(<App/>,document.getElementById('app'))