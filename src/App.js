import React, { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';
const PageLazy2 = React.lazy(() => import('./components/Page2'));
const PageLazy3 = React.lazy(() => import('./components/Page3'));

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
		content = <PageLazy2 onRouteChange={onRouteChange} />;
	} else if (route.route === 'page3') {
		content = <PageLazy3 onRouteChange={onRouteChange} />;
	}

	return <div className='App'>{content}</div>;
}

export default App;
