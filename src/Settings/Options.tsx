import React, { Component } from 'react';
import { PropContain, Button } from './styles';

type Props = {
  data: [] | ImageData[],
  settings: {
    stroke: string,
    strokeColor: string,
    background: string,
    showGrid: boolean,
    sections: number
  },
  reCalData:Function,
  clearData: Function,
}
export default class Options extends Component<Props>{


  state = {
    drawState: 0
  }

  canvas: any = document.getElementById('canvasRender');
  ctx: any = null;
  width: number = 0;
  height: number = 0;


  componentDidUpdate(prevProps: Props){
    const {data} = this.props
    const { drawState } = this.state;
    if(data.length!==prevProps.data.length){
      if(drawState!==0){
        this.setState({
          drawState: 0
        })
        this.props.reCalData(drawState)
      }
    }
  }


  clearCanvas = (clearData: boolean = false) => {
    this.canvas = document.getElementById('canvasRender')
    this.ctx = this.canvas.getContext('2d')
    this.ctx.restore();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    if(clearData){
      this.props.clearData()
      this.setState({
        drawState: 0
      })
    }
  }

  downloadImage = () => {
    const { data, settings } = this.props
    this.canvas = document.getElementById('canvasRender')
    this.ctx = this.canvas.getContext('2d')
    var offScreenCanvas: any = document.createElement('canvas');
    offScreenCanvas.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';
    document.body.appendChild(offScreenCanvas);

    const image = data[data.length - 1];
    offScreenCanvas.width = `${this.ctx.canvas.width}px`;
    offScreenCanvas.height = `${this.ctx.canvas.height}px`;
    const background = settings.background;
    var context = offScreenCanvas.getContext("2d");
    context.fillStyle = background;
    context.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    context.putImageData(image, this.ctx.canvas.width, this.ctx.canvas.height);
    var img = offScreenCanvas.toDataURL();
    console.log(img);

  }


  undoCanvas = () => {
    const { data } = this.props
    const { drawState } = this.state;
    const len = data.length - 1
    this.clearCanvas()
    this.setState({
      drawState: drawState + 1
    }, () => {
      let img: ImageData = data[len - (this.state.drawState)]
      if(img){
        this.ctx.putImageData(img, 0, 0);
      }else{
        this.clearCanvas()
      }
    })
  }

  redoCanvas = () => {
    const { data } = this.props
    const { drawState } = this.state;
    const len = data.length - 1
    this.clearCanvas()
    this.setState({
      drawState: drawState - 1
    }, () => {
      let img: ImageData = data[len - (this.state.drawState)]
      if(img){
        this.ctx.putImageData(img, 0, 0);
      }else{
        this.clearCanvas()
      }
    })

  }

  render() {
    const { data } = this.props
    const { drawState } = this.state;
    const isUndo = !(data.length > 0) || data.length  === drawState    
    const isRedo = 0 === drawState
    return (
      <PropContain>
        <Button background='#ff5a5a' disabled={false} content={'Clear'} onClick={()=>{this.clearCanvas(true)}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '19px' }}><path fill='#ffffff' d="M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z" /></svg>
        </Button>
        <Button background='#4f73f9' disabled={false} content={'Download Image'} onClick={this.downloadImage}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '19px' }}><path fill='#ffffff' d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM224 268v-76h64v76h68L256 368 156 268h68z" /></svg>
        </Button>
        <Button background={isUndo?'#d8d8d8':'#fff'} disabled={isUndo} content={'Undo'} onClick={this.undoCanvas}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '19px' }}><path fill={isUndo?'#737373':'#4f73f9'}  d="M70.5 265.4l59.6-59.4c2.6-2.6 6.1-4.1 9.9-4.1 3.7 0 7.3 1.4 9.9 4.1 2.6 2.6 4.1 6.1 4.1 9.9s-1.5 7.3-4.1 9.9l-.1.1-41.1 40.1H370c13.2 0 25.8-5.2 35.3-14.7 9.5-9.4 14.7-21.9 14.7-35.3v-48c0-7.7 6.3-14 14-14s14 6.3 14 14v48c0 20.8-8.1 40.3-22.9 55.1-14.8 14.8-34.3 22.9-55.1 22.9H108.3l39.6 40.2c2.6 2.6 4.1 6.1 4.1 9.9 0 3.7-1.4 7.3-4.1 9.9l-.1.1c-2.7 2.5-6.2 3.9-9.8 3.9-3.9 0-7.3-1.4-9.9-4.1l-57.6-57.4c-4.2-4.2-6.5-9.8-6.5-15.7 0-5.8 2.3-11.3 6.5-15.4z" /></svg>
        </Button>
        <Button background={isRedo?'#d8d8d8':'#fff'} disabled={isRedo} content={'Redo'} onClick={this.redoCanvas}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '19px' }}><path fill={isRedo?'#737373':'#4f73f9'} d="M441.5 265.4L381.9 206c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9s1.5 7.3 4.1 9.9l.1.1 41.1 40.1H142c-13.2 0-25.8-5.2-35.3-14.7-9.5-9.5-14.7-22-14.7-35.3v-48c0-7.7-6.3-14-14-14s-14 6.3-14 14v48c0 20.8 8.1 40.3 22.9 55.1 14.8 14.8 34.3 22.9 55.1 22.9h261.7L364 334.2c-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.9 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7.1-5.8-2.2-11.3-6.4-15.4z" /></svg>
        </Button>
      </PropContain>
    )
  }
}

