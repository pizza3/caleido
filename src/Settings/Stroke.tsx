import React, { Component } from 'react';
import { SelectBox, PropContain, PropTitle } from './styles';
import AppContext from '../Context/AppContext';

type ContextType ={
    settings: {
		stroke: String,
    },
    handleSettings: Function
}
export default class Stroke extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {(context: any) => {
                    return (
                        <PropContain>
                            <PropTitle>Stroke</PropTitle>
                            <SelectBox value={context.settings.stroke} onChange={(e)=>{context.handleSettings('stroke',e.target.value)}}>
                                <option value='Line'>Line</option>
                                <option value='Near Point'>Near Point</option>
                            </SelectBox>
                        </PropContain>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

