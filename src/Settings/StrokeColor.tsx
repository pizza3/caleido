import React from 'react';
import { PropContain, PropTitle, ColorPicker, ColorPickerOverlay } from './styles';
import AppContext from '../Context/AppContext';
import { getTextColor } from '../helpers'

const StrokeColor : React.FC<{ title: string, keyValue:string }> = ({title, keyValue})=> {
    return (
      <AppContext.Consumer>
        {(context: any) => {
          const color = context.settings[keyValue]
          return (
            <PropContain>
              <PropTitle>{title}</PropTitle>
              <div>
                <ColorPicker type='color' value={color} onChange={(e) => { context.handleSettings(keyValue, e.target.value) }} />
                <ColorPickerOverlay background={color} color={getTextColor(color)}>{color}</ColorPickerOverlay>
              </div>
            </PropContain>
          )
        }}
      </AppContext.Consumer>

    )
}

export default StrokeColor;