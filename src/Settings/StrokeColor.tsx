import React, { Component } from 'react';
import { PropContain, PropTitle, ColorPicker } from './styles';
import AppContext from '../Context/AppContext';

class StrokeColor extends Component {

    render(){
        return(
            <AppContext.Consumer>
                {(context: any) => {
                    return (
                        <PropContain>
                            <PropTitle>Stroke Color</PropTitle>
                            <ColorPicker type='color' value={context.settings.strokeColor} onChange={(e)=>{context.handleSettings('strokeColor',e.target.value)}}/>
                        </PropContain>
                    )
                }}
            </AppContext.Consumer>

        )
    }

}

export default StrokeColor;