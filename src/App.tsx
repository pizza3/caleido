import React, { Component } from 'react';
import Navbar from './Navbar'
import Settings from './Settings'
import CanvasRenderer from './CanvasRenderer'
import { Background } from './CanvasRenderer/styles'
import GridHelper from './GridHelper'
import AppProvider from './Context/AppProvider'
import DrawingMode from './DrawingMode'
import * as serviceWorker from './serviceWorker';
import { AppContain } from './styles'
type State = {
  newVersionAvailable: boolean,
  waitingWorker: ServiceWorker | null,
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
class App extends Component<{}, State> {
  state: State = {
    newVersionAvailable: false,
    waitingWorker: null,
    settings: {
      stroke: 'Near Point',
      strokeColor: '#000000',
      background: '#ffffff',
      showGrid: true,
      sections: 10,
      strokeWeight: 1
    },
    data:[],
    drawingMode: 'Rotation',
    showDrawingMode: false
  }

  componentDidMount = () => {
    // const { enqueueSnackbar } = this.props;
    const { newVersionAvailable } = this.state;
    if (process.env.NODE_ENV === 'production') {
        serviceWorker.register({ onUpdate: this.onServiceWorkerUpdate });
    }
    if (newVersionAvailable){
      console.log('new version avalable 2');
      
    } //show snackbar with refresh button
  };

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

  clearData = () => {
    this.setState({
      data:[]
    })
  }

  onServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
    this.setState({
      waitingWorker: registration && registration.waiting,
      newVersionAvailable: true,
    });
  };

  updateServiceWorker = () => {
    const { waitingWorker } = this.state;
    waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
    this.setState({ newVersionAvailable: false });
    window.location.reload();
  };

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
          <Settings data={data} settings={settings} reCalData={this.reCalData} clearData={this.clearData} mode={drawingMode}  />
        </AppContain>
      </AppProvider>
    )
  }
}

export default App;
