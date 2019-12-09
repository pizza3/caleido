import React, { Component } from 'react';
import { PropContain, PropTitle, ColorPicker, ColorPickerOverlay } from './styles';
import AppContext from '../Context/AppContext';
import {getTextColor} from '../helpers'

class Index extends Component {

    render(){
        return(
            <AppContext.Consumer>
                {(context: any) => {
                    const color = context.settings.background
                    return (
                        <PropContain>
                            <PropTitle>Background</PropTitle>
                            <div>
                                <ColorPicker type='color' value={color} onChange={(e)=>{context.handleSettings('background',e.target.value)}}/>
                                <ColorPickerOverlay background={color} color={getTextColor(color)}>{color}</ColorPickerOverlay>
                            </div>
                        </PropContain>
                    )
                }}
            </AppContext.Consumer>

        )
    }

}

export default Index;