import React from 'react';
import { SelectBox, PropContain, PropTitle } from './styles';
import AppContext from '../Context/AppContext';

interface ContextType {
  settings: {
      stroke: string,
      strokeColor: string,
      background: string,
      showGrid: boolean,
      sections: number
    },    
  handleSettings: Function,
  displayDrawingMode: Function
}
const Stroke : React.FC = () => {
    return (
      <AppContext.Consumer>
        {(context: any) => (
            <PropContain>
              <PropTitle>Stroke</PropTitle>
              <SelectBox value={context.settings.stroke} onChange={(e) => { context.handleSettings('stroke', e.target.value) }}>
                <option value='Line'>Line</option>
                <option value='Near Point'>Near Point</option>
              </SelectBox>
            </PropContain>
          )
        }
      </AppContext.Consumer>
    )
  }

  export default Stroke;

