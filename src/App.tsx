import React, { Component } from 'react';
import Navbar from './Navbar'
import Settings from './Settings'
import CanvasRenderer from './CanvasRenderer'
import {Background} from './CanvasRenderer/styles'
import GridHelper from './GridHelper'
import AppProvider from './Context/AppProvider'
import DrawingMode from './DrawingMode'
import { AppContain } from './styles'
type State = {
	settings: {
		stroke: string,
		strokeColor:string,
		background:string,
		showGrid:boolean,
		sections: number
	},
	drawingMode: string,
	showDrawingMode: boolean
}

type Props = {

}
class App extends Component<Props, State> {

	state = {
		settings: {
			stroke: 'Near Point',
			strokeColor: '#000000',
			background: '#ffffff',
			showGrid:true,
			sections: 6
		},
		drawingMode: 'Rotation',
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
		const { settings, drawingMode, showDrawingMode} = this.state;
		const { stroke, strokeColor, background, showGrid, sections } = settings;
		const grid: JSX.Element|[] = showGrid ? <GridHelper mode={drawingMode} sections={sections}/>:[];
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
					<Background color={background}/>
					{grid}
					<CanvasRenderer mode={drawingMode} stroke={stroke} strokeColor={strokeColor} sections={sections} />
					<Settings />
				</AppContain>
			</AppProvider>
		)
	}
}

export default App;
