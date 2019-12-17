import React, { Component } from 'react';
import { PropContain, PropTitle, WeightsCon, WeightButton } from './styles';

import AppContext from '../Context/AppContext';


export default class Index extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context: any) => {
          return (
            <PropContain>
              <PropTitle>Stroke Weight</PropTitle>
              <WeightsCon>
                <WeightButton radius={5} active={context.settings.strokeWeight===0} onClick={()=>{context.handleSettings('strokeWeight',0)}}/>
                <WeightButton radius={7} active={context.settings.strokeWeight===1} onClick={()=>{context.handleSettings('strokeWeight',1)}}/>
                <WeightButton radius={9} active={context.settings.strokeWeight===2} onClick={()=>{context.handleSettings('strokeWeight',2)}}/>
                <WeightButton radius={11} active={context.settings.strokeWeight===3} onClick={()=>{context.handleSettings('strokeWeight',3)}}/>
              </WeightsCon>
            </PropContain>
          )
        }}
      </AppContext.Consumer>
    )
  }
}