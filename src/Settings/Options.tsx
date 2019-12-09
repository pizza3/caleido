import React, { Component } from 'react';
import { SelectBox, PropContain, PropTitle } from './styles';
import AppContext from '../Context/AppContext';

type ContextType ={
    settings: {
		stroke: String,
    },
    handleSettings: Function
}
export default class Options extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {(context: any) => {
                    return (
                        <PropContain>
                        </PropContain>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

