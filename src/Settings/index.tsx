import React, { Component } from 'react';
import { SettingsContain, SettingsButton } from './styles'
import Stroke from './Stroke'
import StrokeColor from './StrokeColor'
import Grid from './Grid'
import Options from './Options'
import StrokeWeight from './StrokeWeight'
import Sections from './Sections'

type State = {
  showSettings: boolean 
}

type Props = {
  data: []|ImageData[],
    settings: {
    stroke: string,
    strokeColor: string,
    background: string,
    showGrid: boolean,
    sections: number
  },
  reCalData:Function,
  clearData: Function,
  mode: string
}
export default class Settings extends Component<Props, State> {
  state: State = {
    showSettings: true
  }

  componentDidMount(){
    const width = window.innerWidth;
    if(width<600){
      this.setState({
        showSettings: false
      })
    }
  }

  handleshowSettings = () => {
    const { showSettings } = this.state;
    this.setState({
      showSettings: !showSettings
    })
  }
  render() {
    const {data, settings, reCalData, clearData, mode} = this.props
    const { showSettings } = this.state;
    const isSections = mode==='Rotation'||mode==='Kaliedo'?<Sections/>:[]
    return (
      <SettingsContain showSettings={showSettings}>
        <SettingsButton onClick={this.handleshowSettings}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={showSettings?"#4f73f9":"#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
            </path>
          </svg>
        </SettingsButton>
        <Options data={data} settings={settings} reCalData={reCalData} clearData={clearData}/>
        <Stroke />
        <StrokeColor title='Stroke Color' keyValue='strokeColor' />
        <StrokeColor title='Background' keyValue='background' />
        <Grid/>
        <StrokeWeight />
        {isSections}
      </SettingsContain>
    )
  }
}