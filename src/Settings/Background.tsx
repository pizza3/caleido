import React, { Component } from 'react';
import { PropContain, PropTitle, ColorPicker } from './styles';
import AppContext from '../Context/AppContext';

class Index extends Component {

    render(){
        return(
            <AppContext.Consumer>
                {(context: any) => {
                    return (
                        <PropContain>
                            <PropTitle>Background</PropTitle>
                            <ColorPicker type='color' value={context.settings.background} onChange={(e)=>{context.handleSettings('background',e.target.value)}}/>
                        </PropContain>
                    )
                }}
            </AppContext.Consumer>

        )
    }

}

export default Index;