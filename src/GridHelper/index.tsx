import React, { Component } from 'react';
import { Container, VerticalLine, HorizontalLine, ReferencePoint, Diagonal, RotateLine, Diagonal2 } from './styles'
type Props = {
  mode: string
  sections: number
}

class Index extends Component<Props>{
  static defaultProps = {
    mode: 'Mirror',
    sections: 10
  }
  componentDidMount() {
    const This = this;
    window.addEventListener('resize',function(){
      This.forceUpdate();
    })
  }

  renderGrid = () => {
    const { mode } = this.props
    let grid: JSX.Element | JSX.Element[] | [] = [];
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
      case 'Hexagon':
        grid = this.hexagonGrid()
        break;
      case 'HexagonRotation':
        grid = this.triangleGrid()
        break;
      case 'HexagonKaliedo':
        grid = this.triangleGrid()
        break;
      default:
        grid = this.mirrorGrid()
        break;
    }
    return grid;
  }

  mirrorGrid = () => {
    const width = window.innerWidth - 250
    return (<VerticalLine top={width / 2} />)
  }

  rotationalGrid = () => {
    const width = window.innerWidth - 250
    const { sections } = this.props
    let secs = []
    for (let i = 0; i <= 360; i += 360 / sections) {
      secs.push(<RotateLine key={'RotateLine' + i} left={width / 2} angle={i} />)
    }
    return secs
  }


  squareGrid = () => {
    const { mode } = this.props
    const width = window.innerWidth - 250
    const height = window.innerHeight - 50

    let vert = [], horz = [], refs = [], diag = [];

    for (let i = 130; i <= height + 130; i += 130) {
      vert.push(<HorizontalLine key={i + 'HorizontalLine'} top={i} />)
    }

    for (let i = 130; i <= width + 130; i += 130) {
      horz.push(<VerticalLine key={i + 'VerticalLine'} top={i} />)
    }

    for (let y = 130; y <= height + 130; y += 2 * 130) {
      for (let x = 130; x <= width + 2 * 130; x += 2 * 130) {
        refs.push(<ReferencePoint key={`${y}${x}ReferencePoint`} top={y - 4} left={x - 4} />)
        if (mode === 'SquareKaliedo') {
          diag.push(<Diagonal angle={45} key={`${y}${x}Diagonal`} top={y - 130} left={x - 130} />)
          diag.push(<Diagonal angle={135} key={`${y}${x}Diagonal2`} top={y - 130} left={x - 130} />)
        }
      }
    }
    return [...vert, ...horz, ...refs, ...diag]
  }

  triangleGrid = () => {
    const width = window.innerWidth - 250
    const height = window.innerHeight - 50

    let vert = [], refs = [], diag = [];

    for (let i = 112.5; i <= height + 112.5; i += 112.5) {
      vert.push(<HorizontalLine key={i + 'HorizontalLine'} top={i} />)
    }
    let temp = 0;
    for (let y = 0; y <= height + 112.5; y += 112.5) {
      const offset = !(temp % 2) ? 65 : 0;
      for (let x = 0; x <= width + 130; x += 130) {
        diag.push(<Diagonal2 angle={60} key={`${x}${y}Diagonal`} top={y} left={x - offset} />)
        diag.push(<Diagonal2 angle={120} key={`${x}${y}Diagonal23`} top={y} left={x - offset} />)
      }
      temp++;
    }
    let temp2 = 0;
    for (let y = 0; y <= height + 112.5; y += 112.5) {
      const offset = !(temp2 % 2) ? 3 * 130 - 65 : 130;
      for (let x = 0; x <= width + 130; x += 3 * 130) {
        refs.push(<ReferencePoint key={`${y}${x}ReferencePoint`} top={y - 4} left={x + offset - 4}></ReferencePoint>)
      }
      temp2++;
    }
    return [...vert, ...diag, ...refs]
  }

  // used only for the case of hexagon
  hexagonGrid = () => {
    const width = window.innerWidth - 250
    const height = window.innerHeight - 50
    let diag = [];
    let temp = 0;
    for (let y = 0; y <= height + 112.5; y += 112.5) {
      const offset = !(temp % 2) ? 65 : 0;
      for (let x = 130; x <= width + 130; x += 3*130) {
        if(offset){
          diag.push(<Diagonal2 angle={60} key={`${x}${y}Diagonal`} top={y} left={130+x - offset} />)
          diag.push(<Diagonal2 angle={120} key={`${x}${y}Diagonal23`} top={y} left={x - offset} />)
          diag.push(<Diagonal2 angle={0} key={`${x}${y}Diagonal24`} top={y} left={x - offset} />)  
        }else{
          diag.push(<Diagonal2 angle={60} key={`${x}${y}Diagonal`} top={y} left={x - offset-130} />)
          diag.push(<Diagonal2 angle={120} key={`${x}${y}Diagonal23`} top={y} left={130 + x - offset} />)
          diag.push(<Diagonal2 angle={0} key={`${x}${y}Diagonal24`} top={y} left={130 + x - offset} />)  
        }
      }
      temp++;
    }
    return diag
  }


  render() {
    return (
      <Container>
        {this.renderGrid()}
      </Container>
    )
  }

}

export default Index