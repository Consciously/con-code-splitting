import React, { Component } from 'react';

const withAsyncComponent = ImportComponent => {
	return class extends Component {
		state = {
			component: null,
		};
		async componentDidMount() {
			const { default: component } = await ImportComponent;
			this.setState({
				...this.state,
				component: component,
			});
		}

		render() {
			const Component = this.state.component;

			return Component && <Component {...this.props} />;
		}
	};
};

export default withAsyncComponent;
