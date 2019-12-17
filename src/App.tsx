import React, { Component } from 'react';
import Navbar from './Navbar'
import Settings from './Settings'
import CanvasRenderer from './CanvasRenderer'
import { Background } from './CanvasRenderer/styles'
import GridHelper from './GridHelper'
import AppProvider from './Context/AppProvider'
import DrawingMode from './DrawingMode'
import { AppContain } from './styles'
type State = {
  settings: {
    stroke: string,
    strokeColor: string,
    background: string,
    showGrid: boolean,
    sections: number,
    strokeWeight:number
  },
  drawingMode: string,
  showDrawingMode: boolean,
  data: []|ImageData[]
}

type Props = {

}
class App extends Component<Props, State> {
  state = {
    settings: {
      stroke: 'Near Point',
      strokeColor: '#000000',
      background: '#ffffff',
      showGrid: true,
      sections: 10,
      strokeWeight: 1
    },
    data:[],
    drawingMode: 'SquareKaliedo',
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

  handleDrawingMode = (drawingMode: string) => {
    this.setState({
      drawingMode,
      showDrawingMode: false
    })
    this.clearData()
  }

  displayDrawingMode = () => {
    const { showDrawingMode } = this.state;
    this.setState({
      showDrawingMode: !showDrawingMode
    })
  }

  updateData = (imgData: ImageData) => {
    const { data } = this.state;
    this.setState({
      data:[...data,imgData]
    })
  }

  reCalData = (drawState:number) => {    
    const { data } = this.state;
    const len = data.length - 1
    const newData = data.slice(0,len - drawState )
    this.setState({
      data:[...newData,data[data.length-1] ]
    })
  }

  clearData = () =>{
    this.setState({
      data:[]
    })
  }

  render() {
    const { settings, drawingMode, showDrawingMode, data } = this.state;
    const { stroke, strokeColor, background, showGrid, sections, strokeWeight } = settings;
    const grid: JSX.Element | [] = showGrid ? <GridHelper mode={drawingMode} sections={sections} /> : [];
    return (
      <AppProvider
        value={{
          // states
          settings: settings,
          data: data,
          showDrawingMode:showDrawingMode,
          // methods
          handleSettings: this.handleSettings,
          displayDrawingMode: this.displayDrawingMode
        }}>
        <Navbar />
        <DrawingMode handleDrawingMode={this.handleDrawingMode} show={showDrawingMode} />
        <AppContain>
          <Background color={background} />
          {grid}
          <CanvasRenderer mode={drawingMode} stroke={stroke} strokeColor={strokeColor} sections={sections} updateData={this.updateData} strokeWeight={strokeWeight} />
          <Settings data={data} settings={settings} reCalData={this.reCalData} clearData={this.clearData}  />
        </AppContain>
      </AppProvider>
    )
  }
}

export default App;
