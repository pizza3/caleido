import React from 'react';
import { PropContain, PropTitle, RangeStyle, RangeValue, RangeContain } from './styles';
import AppContext from '../Context/AppContext';

type ContextType = {
  settings: {
    showGrid: boolean,
  },
  handleSettings: Function
}
const Sections : React.FC = () => {
    return (
      <AppContext.Consumer>
        {(context: any) => {
          return (
            <PropContain>
              <PropTitle>Sections</PropTitle>
              <RangeContain>
                  <RangeValue>{context.settings.sections}</RangeValue>
                  <RangeStyle
                    type="range"
                    min={3}
                    max={20}
                    step={1}
                    value={context.settings.sections}
                    onChange={(e) => { context.handleSettings('sections', e.target.value) }}
                    />
              </RangeContain>
            </PropContain>
          )
        }}
      </AppContext.Consumer>
    )
}

export default Sections;

