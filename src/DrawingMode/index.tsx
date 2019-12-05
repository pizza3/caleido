import React, {Component} from 'react';
import {Container, OptionContain, OptionImg, OptionTitle} from './styles'
import img from '../Assets/img.png'

type Props = {
    handleDrawingMode: Function
    show: boolean
}


const ModesData = [
    {
        name:'Mirror'
    }, 
    {
        name:'Rotation'
    },
    {
        name:'Kaliedo'
    },
    {
        name:'SquareRotation'
    },
    {
        name:'SquareKaliedo'
    }
]

export default class Index extends Component<Props>{





    render(){
        const {handleDrawingMode, show}  = this.props;
        const ModesList = ModesData.map((data)=>{
            return(
                <OptionContain key={data.name} onClick={()=>{handleDrawingMode(data.name)}}>
                    <OptionImg src={img}/>
                    <OptionTitle>{data.name}</OptionTitle>
                </OptionContain>
            )
        })
        return(
            <Container show={show}>
                {ModesList}
            </Container>
        )
    }
}