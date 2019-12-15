import React, { Component } from 'react';
import { Container, OptionContain, OptionImg, OptionTitle } from './styles'
import img from '../Assets/img3.png'

type Props = {
  handleDrawingMode: Function
  show: boolean
}


const ModesData = [
  {
    name: 'Mirror',
    title: 'Mirror',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/mirror.webp'
    

  },
  {
    name: 'Rotation',
    title: 'Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/rotation.png'

  },
  {
    name: 'Kaliedo',
    title: 'Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/kaliedo.webp'

  },
  {
    name: 'SquareRotation',
    title: 'Square Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/squarerotation.webp'

  },
  {
    name: 'SquareKaliedo',
    title: 'Square Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/squarekaliedo.webp'


  },
  {
    name: 'HexagonRotation',
    title: 'Hexagon Rotation',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagonrotation.webp'

  },
  {
    name: 'HexagonKaliedo',
    title: 'Hexagon Kaliedo',
    image: 'https://raw.githubusercontent.com/pizza3/asset/master/hexagonkaliedo.webp'
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