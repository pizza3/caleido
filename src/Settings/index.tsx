import React, { Component } from 'react';
import { SettingsContain } from './styles'
import Stroke from './Stroke'
import StrokeColor from './StrokeColor'
import Background from './Background'
import Grid from './Grid'
import Options from './Options'



export default class Settings extends Component {


  render() {
    return (
      <SettingsContain>
        <Options/>
        <Stroke />
        <StrokeColor />
        <Background />
        <Grid/>
      </SettingsContain>
    )
  }
}