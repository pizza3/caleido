import React from 'react';
import { PropContain, PropTitle, Switch } from './styles';
import AppContext from '../Context/AppContext';

type ContextType = {
  settings: {
    showGrid: boolean,
  },
  handleSettings: Function
}
const Grid: React.FC = () => {
  return (
    <AppContext.Consumer>
      {(context: any) => {
        return (
          <PropContain>
            <PropTitle>Grid</PropTitle>
            <Switch>
              <input
                type="checkbox"
                checked={context.settings.showGrid}
                onChange={(e) => { context.handleSettings('showGrid', e.target.checked) }}
              />
              <i />
            </Switch>
          </PropContain>
        )
      }}
    </AppContext.Consumer>
  )
}



export default Grid