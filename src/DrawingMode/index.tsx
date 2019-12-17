import React, { Component } from 'react';
import { Container, OptionContain, OptionImg, OptionTitle } from './styles'

type Props = {
  handleDrawingMode: Function
  show: boolean
}


const ModesData = [
  {
    name: 'Mirror',
    title: 'Mirror',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/mirror.png'
    

  },
  {
    name: 'Rotation',
    title: 'Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/rotation.png'

  },
  {
    name: 'Kaliedo',
    title: 'Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/kaliedo.png'

  },
  {
    name: 'SquareRotation',
    title: 'Square Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/squarerotation.png'

  },
  {
    name: 'SquareKaliedo',
    title: 'Square Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/squarekaliedo.png'


  },
  {
    name: 'HexagonRotation',
    title: 'Hexagon Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagonrotation.png'

  },
  {
    name: 'HexagonKaliedo',
    title: 'Hexagon Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagonkaliedo.png'
  }
]

export default class Index extends Component<Props>{

  render() {
    const { handleDrawingMode, show } = this.props;
    const ModesList = ModesData.map((data) => {
      return (
        <OptionContain key={data.name} onClick={() => { handleDrawingMode(data.name) }}>
          <OptionImg src={data.image} />
          <OptionTitle>{data.title}</OptionTitle>
        </OptionContain>
      )
    })
    return (
      <Container show={show}>
        {ModesList}
      </Container>
    )
  }
}