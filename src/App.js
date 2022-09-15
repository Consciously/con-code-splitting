import { useState } from 'react';
import './App.css';
import withAsyncComponent from './components/withAsyncComponent';
import Page1 from './components/Page1';

const defaultRoute = {
	route: 'page1',
	component: null,
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
		const AsyncPage2 = withAsyncComponent(import('./components/Page2'));
		content = <AsyncPage2 onRouteChange={onRouteChange} />;
	} else if (route.route === 'page3') {
		const AsyncPage3 = withAsyncComponent(import('./components/Page3'));
		content = <AsyncPage3 onRouteChange={onRouteChange} />;
	}

	return <div className='App'>{content}</div>;
}

export default App;
