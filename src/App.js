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
		// Without code splitting
		setRoute({ ...route, route: route });

		// With code splitting

		// if (route === 'page1') {
		// 	setRoute({ ...route, route: route });
		// } else if (route === 'page2') {
		// 	import('./components/Page2').then(Page2 => {
		// 		setRoute({ ...route, component: Page2.default });
		// 	});
		// } else if (route === 'page3') {
		// 	import('./components/Page3').then(Page3 => {
		// 		setRoute({ ...route, component: Page3.default });
		// 	});
		// }
	};

	let content;

	if (route.route === 'page1') {
		content = <Page1 onRouteChange={onRouteChange} />;
	} else if (route.route === 'page2') {
		content = <Page2 onRouteChange={onRouteChange} />;
	} else if (route.route === 'page3') {
		content = <Page3 onRouteChange={onRouteChange} />;
	}

	return (
		<div className='App'>
			{content}
			{/* {route.route === 'page1' ? (
				<Page1 onRouteChange={onRouteChange} />
			) : (
				<route.component onRouteChange={onRouteChange} />
			)} */}
		</div>
	);
}

export default App;
