import React, { Component } from 'react';
import Navbar from './Navbar'
import Settings from './Settings'
// import CanvasRenderer from './CanvasRenderer'
import AppProvider from './Context/AppProvider'
type State = {
	settings: {
		stroke: String,
	},
	drawingMode: String
}

type Props = {

}
class App extends Component<Props, State> {

	state = {
		settings: {
			stroke: 'Near Point'
		},
		drawingMode: 'Mirror'
	}

	handleSettings = (option: String | any, value: String) => {
		const { settings } = this.state;
		this.setState({
			settings: {
				...settings,
				[option]: value
			}
		})
	}

	render() {
		const { settings } = this.state
		return (
			<AppProvider
				value={{
					// states
					settings:settings,
					// methods
					handleSettings: this.handleSettings,
				}}>
				<div>
					<Navbar />
					<Settings />
					{/* <CanvasRenderer /> */}
				</div>
			</AppProvider>
		)
	}
}

export default App;
