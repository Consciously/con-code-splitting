import { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

const defaultRoute = {
	route: 'page1',
};

function App() {
	const [route, setRoute] = useState(defaultRoute);

	const onRouteChange = async route => {
		setRoute({ ...route, route: route });
	};

	let content;

	if (route.route === 'page1') {
		content = <Page1 onRouteChange={onRouteChange} />;
	} else if (route.route === 'page2') {
		content = <Page2 onRouteChange={onRouteChange} />;
	} else if (route.route === 'page3') {
		content = <Page3 onRouteChange={onRouteChange} />;
	}

	return <div className='App'>{content}</div>;
}

export default App;
