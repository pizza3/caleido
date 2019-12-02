import React,{Component} from 'react';
import {SettingsContain} from './styles'
import Stroke from './Stroke'

export default class Settings extends Component{


    render(){
        return(
            <SettingsContain>
                <Stroke/>
            </SettingsContain>
        )
    }
}