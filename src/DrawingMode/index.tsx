import React from 'react';
import { Container, OptionContain, OptionImg, OptionTitle } from './styles'
import { ModesData } from '../helpers'

const DrawingMode:React.FC<{handleDrawingMode:Function,show:boolean}> = ({handleDrawingMode, show})=>{
  const ModesList = ModesData.map((data) => {
    return (
      <OptionContain key={data.name} onClick={() => { handleDrawingMode(data.name) }}>
        <OptionImg src={data.image} alt={data.title} />
        <OptionTitle>{data.title}</OptionTitle>
      </OptionContain>
    )
  })
  return(
    <Container show={show}>
      {ModesList}
    </Container>
  )
}

export default DrawingMode