import { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';

const defaultRoute = {
	route: 'page1',
};

function App() {
	const [route, setRoute] = useState(defaultRoute);

	const onRouteChange = async route => {
		if (route === 'page1') {
			setRoute({ ...route, route: route });
		} else if (route === 'page2') {
			import('./components/Page2').then(Page2 => {
				setRoute({ ...route, component: Page2.default });
			});
		} else if (route === 'page3') {
			import('./components/Page3').then(Page3 => {
				setRoute({ ...route, component: Page3.default });
			});
		}
	};

	return (
		<div className='App'>
			{route.route === 'page1' ? (
				<Page1 onRouteChange={onRouteChange} />
			) : (
				<route.component onRouteChange={onRouteChange} />
			)}
		</div>
	);
}

export default App;
