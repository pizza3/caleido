import React, { Component } from 'react';
import { CanvasContain, CanvasOverlay } from './styles';
import { midPointDiff, activeBlock, TWOPI, hexToRgb, activeHex } from '../helpers';

type States = {
  isDrawing: boolean,
}

type CoordinatePlane = {
  x: number
  y: number
}

type Props = {
  mode: string
  stroke: string
  strokeColor: string
  sections: number
  strokeWeight: number
  updateData: Function,
}

export default class CanvasRenderer extends Component<Props, States>{
  state: States = {
    isDrawing: false,
  }

  public static defaultProps = {
    strokeColor: "#000000"
  };


  // Basic canvas variables .
  canvasRender: any = document.getElementById('canvasRender');
  ctx: any = null;
  width: number = 0;
  height: number = 0;

  // Mouse interaction variables .
  points: { x: number, y: number }[] = [];
  squaresections: number = 130;
  isDrawing: boolean = false
  activeBlock: CoordinatePlane = { x: this.squaresections, y: this.squaresections }

  componentDidMount() {
    this.setRenderer()
  }

  componentDidUpdate(prevProps: Props) {
    const { mode } = this.props;
    if (mode !== prevProps.mode) {
      this.setModeTranformation()
    }
  }

  // sets canvas and ctx 
  setRenderer = () => {
    this.canvasRender = document.getElementById('canvasRender');
    this.ctx = this.canvasRender.getContext('2d');
    this.canvasRender.width = this.width = window.innerWidth - 250;
    this.canvasRender.height = this.height = window.innerHeight - 50;
    this.ctx.lineJoin = this.ctx.lineCap = 'round';
    this.setModeTranformation()
  }

  setModeTranformation = () => {
    const { mode } = this.props;
    this.points = []
    switch (mode) {
      case 'Rotation':
        this.resetRenderer()
        this.ctx.translate(this.width / 2, this.height / 2);
        break;
      case 'Kaliedo':
        this.resetRenderer()
        this.ctx.translate(this.width / 2, this.height / 2);
        break;
      default:
        this.resetRenderer()
        break;
    }
  }

  // re renders canvas again on change in drawing mode
  resetRenderer = () => {
    // remove of any for of unnessecary tranformations and states
    this.ctx.restore();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    // clear canvas
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    e.persist();
    if (this.isDrawing) {
      this.handleDrawingMode({ x: e.clientX, y: e.clientY - 50 })
    }
  }

  handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.persist();
    this.selectNearestReferencePoint({ x: e.clientX, y: e.clientY - 50 })
    this.pushPoints({ x: e.clientX, y: e.clientY - 50 })
    // this.pushPoints({ x: e.touches ? e.touches[0].clientX : e.clientX, y: e.touches ? e.touches[0].clientY -50: e.clientY- 50 })
    this.isDrawing = true
    // this.selectNearestReferencePoint({ x: e.touches ? e.touches[0].clientX : e.clientX, y: e.touches ? e.touches[0].clientY -50: e.clientY- 50 })

  }

  handleTouchMove = (e: React.TouchEvent) => {
    e.persist();
    if (this.isDrawing) {
      this.handleDrawingMode({ x: e.touches[0].clientX, y: e.touches[0].clientY - 50 })
    }
  }

  handleTouchDown = (e: React.TouchEvent) => {
    e.persist();
    this.selectNearestReferencePoint({ x: e.touches[0].clientX, y: e.touches[0].clientY - 50 })
    this.pushPoints({ x: e.touches[0].clientX, y: e.touches[0].clientY - 50 })
    // this.pushPoints({ x: e.touches ? e.touches[0].clientX : e.clientX, y: e.touches ? e.touches[0].clientY -50: e.clientY- 50 })
    this.isDrawing = true
    // this.selectNearestReferencePoint({ x: e.touches ? e.touches[0].clientX : e.clientX, y: e.touches ? e.touches[0].clientY -50: e.clientY- 50 })
  }

  handleMouseLeave = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    const { updateData } = this.props
    if (this.points.length > 1) {
      var imgData = this.ctx.getImageData(0, 0, this.width, this.height);
      updateData(imgData)
    }
    this.points = [];
    this.isDrawing = false
  }

  handleDrawingMode = (e: CoordinatePlane) => {
    const { mode, sections } = this.props;
    const angle: number = TWOPI / sections
    this.pushPoints({ x: e.x, y: e.y })
    if (mode === 'Mirror') {
      this.handleStrokeType()
      // flip the render in order for mirror effect
      this.ctx.translate(this.width, 0);
      this.ctx.scale(-1, 1);
      this.handleStrokeType()
    } else if (mode === 'Kaliedo' || mode === 'Rotation') {
      for (let i = 0; i < TWOPI; i += angle) {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.translate(this.width / 2, this.height / 2);
        this.ctx.rotate(i);
        this.handleStrokeType()
      }
    } else if (mode === 'SquareRotation' || mode === 'SquareKaliedo') {
      for (let h = -this.squaresections; h <= this.height + this.squaresections; h += 2 * this.squaresections) {
        for (let w = -this.squaresections; w <= this.width + this.squaresections; w += 2 * this.squaresections) {
          for (let i = 0; i < TWOPI; i += TWOPI / 4) {
            this.ctx.restore();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.translate(w, h);
            this.ctx.rotate(i);
            this.handleStrokeType()
          }
        }
      }
    } else if (mode === 'Hexagon') {
      let temp3 = -1;
      this.ctx.restore();
      for (let y = -112.5; y <= this.height + 112.5; y += 112.5) {
        const offset = !(temp3 % 2) ? -3 * 130 - 65 : 130;
        for (let x = offset; x <= this.width + 3 * 130; x += 3 * 130) {
          this.ctx.setTransform(1, 0, 0, 1, 0, 0);
          this.ctx.translate(x, y);
          this.ctx.rotate(0);
          this.handleStrokeType()
        }
        temp3++
      }
    } else if (mode === 'HexagonRotation' || mode === 'HexagonKaliedo') {
      let temp = 0;
      this.ctx.restore();
      for (let y = 0; y <= this.height + 112.5; y += 112.5) {
        const offset = !(temp % 2) ? -3 * 130 - 65 : 130;
        for (let x = offset; x <= this.width + 3 * 130; x += 3 * 130) {
          for (let i = 0; i <= TWOPI; i += TWOPI / 6) {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.translate(x, y);
            this.ctx.rotate(i);
            this.handleStrokeType()
          }
        }
        temp++
      }
    } else {
      // as a default case the mirror will exec.
      this.handleStrokeType()
      this.ctx.translate(this.width, 0);
      this.ctx.scale(-1, 1);
      this.handleStrokeType()

    }
  }

  handleStrokeType = (offset: number = 0) => {
    // this.ctx.beginPath();
    // this.ctx.moveTo(this.points[this.points.length - 2].x+offset, this.points[this.points.length - 2].y);
    // this.ctx.lineTo(this.points[this.points.length - 1].x+offset, this.points[this.points.length - 1].y);
    // this.ctx.stroke();
    const { mode, stroke, strokeColor } = this.props;
    const color: { r: number, g: number, b: number } = hexToRgb(strokeColor)
    if (stroke === 'Near Point') {
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},0.1)`;
      for (let i = 0, len = this.points.length; i < len; i++) {
        const dx: number = this.points[i].x + offset - (this.points[this.points.length - 1].x + offset);
        const dy: number = this.points[i].y - this.points[this.points.length - 1].y;
        const d: number = dx * dx + dy * dy;
        const dLimit: number = this.handleStrokeWeight()
        if (d < dLimit) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.points[this.points.length - 1].x + offset + (dx * 0.2), this.points[this.points.length - 1].y + (dy * 0.2));
          this.ctx.lineTo(this.points[i].x + offset - (dx * 0.2), this.points[i].y - (dy * 0.2));
          this.ctx.stroke();
          if (mode === 'Kaliedo' || mode === 'HexagonKaliedo' || mode === 'SquareKaliedo') {
            this.ctx.beginPath();
            this.ctx.moveTo(-this.points[this.points.length - 1].x + (-dx * 0.2), this.points[this.points.length - 1].y + (dy * 0.2));
            this.ctx.lineTo(-this.points[i].x - (-dx * 0.2), this.points[i].y - (dy * 0.2));
            this.ctx.stroke();
          }
        }
      }
    } else {
      console.log(this.points);
      // if(this.points[this.points.length - 2].x<0||this.points[this.points.length - 1].x<0)return
      this.ctx.lineWidth = this.handleStrokeWeight();
      this.ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},1)`;
      this.ctx.beginPath();
      this.ctx.moveTo(this.points[this.points.length - 2].x, this.points[this.points.length - 2].y);
      this.ctx.lineTo(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
      this.ctx.stroke();
      if (mode === 'Kaliedo' || mode === 'HexagonKaliedo' || mode === 'SquareKaliedo') {
        this.ctx.beginPath();
        this.ctx.moveTo(-this.points[this.points.length - 2].x, this.points[this.points.length - 2].y);
        this.ctx.lineTo(-this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);
        this.ctx.stroke();
      }
    }
  }

  handleStrokeWeight = () => {
    const { strokeWeight, stroke } = this.props;
    if (stroke === 'Near Point') {
      if (strokeWeight === 0) {
        return 250
      } else if (strokeWeight === 1) {
        return 500
      } else if (strokeWeight === 2) {
        return 750
      } else {
        return 1000
      }
    } else {
      if (strokeWeight === 0) {
        return 1
      } else if (strokeWeight === 1) {
        return 5
      } else if (strokeWeight === 1) {
        return 10
      } else {
        return 15
      }
    }

  }

  selectNearestReferencePoint = (e: CoordinatePlane) => {
    const { mode } = this.props;
    let newactiveSection = activeBlock(e.x, e.y, this.squaresections)
    if (mode === 'HexagonRotation' || mode === 'HexagonKaliedo' || mode === 'Hexagon') {
      newactiveSection = activeHex(e.x, e.y, this.squaresections, this.width, this.height)
      this.activeBlock = {
        x: newactiveSection.x,
        y: newactiveSection.y
      }
    } else {
      this.activeBlock = {
        x: newactiveSection.x * this.squaresections,
        y: newactiveSection.y * this.squaresections
      }
    }
  }


  pushPoints = (e: CoordinatePlane) => {
    const { mode } = this.props;
    if (mode === 'Rotation' || mode === 'Kaliedo') {
      /**  giving an offset of width / 2 & height / 2 because
       * canvas is translated by width / 2 & height / 2. */
      this.points.push({ x: e.x - this.width / 2, y: e.y - this.height / 2 });
    } else if (mode === 'SquareRotation' || mode === 'SquareKaliedo' || mode === 'HexagonRotation' || mode === 'HexagonKaliedo' || mode === 'Hexagon') {
      /**  For the cases of SquareRotation,SquareKaliedo,HexagonRotation,HexagonKaliedo,Hexagon
       *   the distance between mouse/touch and the reference point is taken and pushed into this.points,
       *   this distance is basically normalised wrt 0,0.
       */
      const psk: { x: number, y: number } = midPointDiff(e.x, e.y, this.activeBlock)
      this.points.push(psk)
    } else {
      this.points.push({ x: e.x, y: e.y });
    }
  }

  drawSquare = (w: number, h: number, i: number) => {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.translate(w, h);
    this.ctx.rotate(i);
    this.handleStrokeType()
  }

  render() {
    return (
      <CanvasOverlay>
        <CanvasContain id='canvasRender' onMouseDown={this.handleMouseDown}  onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseLeave} onMouseLeave={this.handleMouseLeave} onTouchStart={this.handleTouchDown} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleMouseLeave} ></CanvasContain>
      </CanvasOverlay>
    )
  }
}