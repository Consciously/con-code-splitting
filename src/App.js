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

	const onRouteChange = route => {
		setRoute({ route });
	};

	return (
		<div className='App'>
			{route.route === 'page1' ? (
				<Page1 onRouteChange={onRouteChange} />
			) : route.route === 'page2' ? (
				<Page2 onRouteChange={onRouteChange} />
			) : route.route === 'page3' ? (
				<Page3 onRouteChange={onRouteChange} />
			) : null}
		</div>
	);
}

export default App;
