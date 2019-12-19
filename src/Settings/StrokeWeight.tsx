import React from 'react';
import { PropContain, PropTitle, WeightsCon, WeightButton } from './styles';

import AppContext from '../Context/AppContext';


const StrokeWeight : React.FC = () => {
  return (
    <AppContext.Consumer>
      {(context: any) => {
        return (
          <PropContain>
            <PropTitle>Stroke Weight</PropTitle>
            <WeightsCon>
              <WeightButton aria-label="Stroke Weight 1" radius={5} active={context.settings.strokeWeight===0} onClick={()=>{context.handleSettings('strokeWeight',0)}}/>
              <WeightButton aria-label="Stroke Weight 2" radius={7} active={context.settings.strokeWeight===1} onClick={()=>{context.handleSettings('strokeWeight',1)}}/>
              <WeightButton aria-label="Stroke Weight 3" radius={9} active={context.settings.strokeWeight===2} onClick={()=>{context.handleSettings('strokeWeight',2)}}/>
              <WeightButton aria-label="Stroke Weight 4" radius={11} active={context.settings.strokeWeight===3} onClick={()=>{context.handleSettings('strokeWeight',3)}}/>
            </WeightsCon>
          </PropContain>
        )
      }}
    </AppContext.Consumer>
  )
}

export default StrokeWeight
