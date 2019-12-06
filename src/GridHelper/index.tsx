import React, { Component } from 'react';
import {Container, VerticalLine, HorizontalLine, ReferencePoint, Diagonal, Diagonal2,RotateLine} from './styles'
import {TWOPI} from '../helpers'
type Props = {
    mode: string
    sections: number
}

class Index extends Component <Props>{
    renderGrid=()=>{
        const {mode} = this.props
        let grid : JSX.Element|JSX.Element[]|[] = [];
        switch (mode) {
            case 'Mirror':
                grid = this.mirrorGrid()
                break;
            case 'Rotation':
                grid = this.rotationalGrid()
                break;
            case 'Kaliedo':
                grid = this.rotationalGrid()
                break;
            case 'SquareRotation':
                grid = this.squareGrid()
                break;
            case 'SquareKaliedo':
                grid = this.squareGrid()
                break;                  
            default:
                break;
        }
        return grid;
    }

    mirrorGrid=() =>{
        const width = window.innerWidth - 250
        return ([<VerticalLine top={width/2}/>])
    }

    rotationalGrid = ()=>{
        const width = window.innerWidth - 250
        const {sections} = this.props
        let secs = []
        for(let i=0;i<=360;i+=360/sections){
            secs.push(<RotateLine key={'RotateLine'+i} left={width/2} angle={i}/>)
        }
        return secs
    }


    squareGrid = ()=>{
        const {mode} = this.props
        const width = window.innerWidth - 250
        const height = window.innerHeight - 50

        let vert = [], horz=[], refs=[], diag=[];

        for(let i=130; i<=height+130; i+=130 ){
            vert.push(<HorizontalLine key={i+'HorizontalLine'} top={i}/>)
        }

        for(let i=130; i<=width+130; i+=130 ){
            horz.push(<VerticalLine key={i+'VerticalLine'} top={i}/>)
        }

        for(let y=130; y<=height+130; y+=2*130){
            for(let x=130; x<=width+130; x+=2*130 ){
                refs.push(<ReferencePoint key={`${y}${x}ReferencePoint`} top={y-4} left={x-4}/>)
                if(mode==='SquareKaliedo'){
                    diag.push(<Diagonal key={`${y}${x}Diagonal`} top={y-130} left={x-130}/>)
                    diag.push(<Diagonal2 key={`${y}${x}Diagonal2`} top={y-130} left={x-130}/>)    
                }
            }
        }

        return [...vert,...horz,...refs,...diag ]

    }


    render(){
        return(
            <Container>
                {this.renderGrid()}
            </Container>
        )
    }

}

export default Index