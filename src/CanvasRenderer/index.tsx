import React, { Component } from 'react';
import { CanvasContain } from './styles';
import { midPointDiff, activeBlock, TWOPI, hexToRgb, scaleCanvas } from '../helpers'
type States = {
    isDrawing: Boolean
}

type EventVariables = {
    clientX: number
    clientY: number

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
}

export default class CanvasRenderer extends Component<Props, States>{
    state = {
        isDrawing: false
    }

    public static defaultProps = {
        strokeColor: "#000000"
    };


    // Basic canvas variables .
    canvasRender: any = document.getElementById('canvasRender');
    ctx: any= null;
    width: number = 0;
    height: number = 0;

    // Mouse interaction variables .
    points: any | [] = [];
    sections: number = 130;
    isDrawing: Boolean = false
    activeBlock: CoordinatePlane = { x: this.sections, y: this.sections }

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
        // scaleCanvas(this.canvasRender,this.ctx,window.innerWidth,window.innerHeight)
        this.ctx.lineWidth = 1;
        this.ctx.lineJoin = this.ctx.lineCap = 'round';
        this.setModeTranformation()
    }

    setModeTranformation = ()=>{
        const { mode } = this.props;
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



    handleMouseMove = (e: EventVariables) => {
        if (this.isDrawing) {
            this.handleDrawingMode({ x: e.clientX, y: e.clientY - 50 })
        }
    }

    handleMouseDown = (e: EventVariables) => {
        this.pushPoints({ x: e.clientX, y: e.clientY - 50 })
        this.isDrawing = true
        this.selectNearestReferencePoint({ x: e.clientX, y: e.clientY - 50 })
    }

    handleMouseLeave = (e: EventVariables) => {
        this.points = [];
        this.isDrawing = false
    }

    handleDrawingMode = (e: CoordinatePlane) => {
        const { mode, sections  } = this.props;
        const angle = TWOPI / sections
        this.pushPoints({ x: e.x, y: e.y })
        switch (mode) {
            case 'Mirror':
                const limit = this.width / 2
                let offset: number = limit - e.x;
                this.handleStrokeType()
                this.handleStrokeType(offset * 2)
                break;
            case 'Kaliedo':
                for (let i = 0; i < TWOPI; i += angle) {
                    this.ctx.rotate(i);
                    this.handleStrokeType()
                }
                break;
            case 'Rotation':
                for (let i = 0; i < TWOPI; i += angle) {
                    console.log(i);
                    
                    this.ctx.rotate(i);
                    this.handleStrokeType()
                }
                console.log(TWOPI);
                break;
            case 'SquareRotation':
                for (let h = -this.sections; h <= this.height + this.sections; h += 2 * this.sections) {
                    for (let w = -this.sections; w <= this.width + this.sections; w += 2 * this.sections) {
                        this.ctx.restore();
                        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                        this.ctx.translate(w, h);
                        for (let i = 0; i < TWOPI; i += TWOPI / 4) {
                            this.ctx.rotate(i);
                            this.handleStrokeType()
                        }
                    }
                }
                break;
            case 'SquareKaliedo':
                for (let h = -this.sections; h <= this.height + this.sections; h += 2 * this.sections) {
                    for (let w = -this.sections; w <= this.width + this.sections; w += 2 * this.sections) {
                        this.ctx.restore();
                        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                        this.ctx.translate(w, h);
                        for (let i = 0; i < TWOPI; i += TWOPI / 4) {
                            this.ctx.rotate(i);
                            this.handleStrokeType()
                        }
                    }
                }
                break;
            default:
                break;
        }
    }

    handleStrokeType = (offset: number = 0) => {
        // this.ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        // this.ctx.beginPath();
        // this.ctx.moveTo(this.points[this.points.length - 2].x+offset, this.points[this.points.length - 2].y);
        // this.ctx.lineTo(this.points[this.points.length - 1].x+offset, this.points[this.points.length - 1].y);
        // this.ctx.stroke();
        const { mode, stroke, strokeColor } = this.props;
        const color = hexToRgb(strokeColor)
        if (stroke === 'Near Point') {
            for (let i = 0, len = this.points.length; i < len; i++) {
                const dx = this.points[i].x + offset - (this.points[this.points.length - 1].x + offset);
                const dy = this.points[i].y - this.points[this.points.length - 1].y;
                const d = dx * dx + dy * dy;
                this.ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},0.1)`;
                if (d < 1000) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.points[this.points.length - 1].x + offset + (dx * 0.2), this.points[this.points.length - 1].y + (dy * 0.2));
                    this.ctx.lineTo(this.points[i].x + offset - (dx * 0.2), this.points[i].y - (dy * 0.2));
                    this.ctx.stroke();
                    if (mode === 'Kaliedo' || mode === 'SquareKaliedo') {
                        this.ctx.beginPath();
                        this.ctx.moveTo(-this.points[this.points.length - 1].x + (-dx * 0.2), this.points[this.points.length - 1].y + (dy * 0.2));
                        this.ctx.lineTo(-this.points[i].x - (-dx * 0.2), this.points[i].y - (dy * 0.2));
                        this.ctx.stroke();
                    }
                }
            }
        } else {
        }
    }

    selectNearestReferencePoint = (e: CoordinatePlane) => {
        let newactiveSection = activeBlock(e.x, e.y, this.sections)
        this.activeBlock = {
            x: newactiveSection.x * this.sections,
            y: newactiveSection.y * this.sections
        }
    }


    pushPoints = (e: CoordinatePlane) => {
        const { mode } = this.props;
        switch (mode) {
            case 'Rotation':
                /**  giving an offset of width / 2 & height / 2 because
                 * canvas is translated by width / 2 & height / 2. */
                this.points.push({ x: e.x - this.width / 2, y: e.y - this.height / 2 });
                break;
            case 'Kaliedo':
                this.points.push({ x: e.x - this.width / 2, y: e.y - this.height / 2 });
                break;
            case 'SquareKaliedo':
                const psk = midPointDiff(e.x, e.y, this.activeBlock)
                this.points.push(psk)
                break;
            case 'SquareRotation':
                const psr = midPointDiff(e.x, e.y, this.activeBlock)
                this.points.push(psr)
                break;
            default:
                this.points.push({ x: e.x, y: e.y });
        }

    }

    render() {
        return (
            <CanvasContain id='canvasRender' onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseLeave} onMouseLeave={this.handleMouseLeave} ></CanvasContain>
        )
    }
}