import React, { Component } from 'react';
import { SettingsContain } from './styles'
import Stroke from './Stroke'
import StrokeColor from './StrokeColor'
import Background from './Background'
import Grid from './Grid'
import Options from './Options'


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
  clearData: Function
}
export default class Settings extends Component<Props> {


  render() {
    const {data, settings, reCalData, clearData} = this.props
    return (
      <SettingsContain>
        <Options data={data} settings={settings} reCalData={reCalData} clearData={clearData}/>
        <Stroke />
        <StrokeColor />
        <Background />
        <Grid/>
        {/* <Stroke /> */}
      </SettingsContain>
    )
  }
}