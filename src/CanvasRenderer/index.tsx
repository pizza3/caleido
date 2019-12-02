import React, { Component } from 'react';
import { CanvasContain } from './styles';
import {midPointDiff,activeBlock} from '../helpers'
type States = {
    isDrawing: Boolean
}

type EventVariables = {
    clientX: Number,
    clientY: Number

}


type Props = {
    
}

export default class CanvasRenderer extends Component<Props,States>{
    state = {
        isDrawing:false
    }
    // Basic canvas variables .
    canvasRender: any = null;
    ctx: any = null;
    width: Number = 0;
    height: Number = 0;

    // Mouse interaction variables .
    points: [Number] | [] = [];
    sections: Number = 130;
    activeBlock: {x:Number,y:Number}={x:this.sections,y:this.sections}

    componentDidMount(){
        
    }

    setRenderer = () => {
        this.canvasRender = document.getElementById('canvasRender');
        this.ctx = this.canvasRender.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    handleMouseMove = (e:EventVariables) => {

    }

    handleMouseDown = (e:EventVariables) => {

    }

    handleMouseLeave = (e:EventVariables) => {

    }

    handleDrawingMode = (mode: String) => {
        switch (mode) {
            case 'Mirror':
                
                break;
            case 'Kaliedo':
            
                break;
            case 'Rotaion':
        
                break;
            case 'SquareRotaion':
            
                break;
            case 'SquareKaliedo':
        
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <CanvasContain onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave} id='canvasRender'></CanvasContain>
        )
    }
}