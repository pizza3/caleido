import React, { Component } from 'react';
import Navbar from './Navbar'
import Settings from './Settings'
import CanvasRenderer from './CanvasRenderer'
import AppProvider from './Context/AppProvider'
import DrawingMode from './DrawingMode'
import { AppContain } from './styles'
type State = {
	settings: {
		stroke: string,
	},
	drawingMode: string,
	showDrawingMode: boolean
}

type Props = {

}
class App extends Component<Props, State> {

	state = {
		settings: {
			stroke: 'Near Point'
		},
		drawingMode: 'SquareRotation',
		showDrawingMode: false
	}

	handleSettings = (option: string | any, value: string) => {
		const { settings } = this.state;
		this.setState({
			settings: {
				...settings,
				[option]: value
			}
		});
	}

	handleDrawingMode = (drawingMode: string) =>{
		this.setState({
			drawingMode,
			showDrawingMode: false
		})
	}

	displayDrawingMode = ()=>{
		const { showDrawingMode } = this.state;
		this.setState({
			showDrawingMode:!showDrawingMode
		})
	}

	render() {
		const { settings, drawingMode, showDrawingMode } = this.state;
		const { stroke } = settings;
		return (
			<AppProvider
				value={{
					// states
					settings:settings,
					// methods
					handleSettings: this.handleSettings,
					displayDrawingMode: this.displayDrawingMode
				}}>
				<Navbar/>
				<DrawingMode handleDrawingMode={this.handleDrawingMode} show={showDrawingMode}/>
				<AppContain>
					<CanvasRenderer mode={drawingMode} stroke={stroke} />
					<Settings />
				</AppContain>
			</AppProvider>
		)
	}
}

export default App;
