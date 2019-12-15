import styled from 'styled-components'


export const Container = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    z-index:0;
    overflow:hidden;
`

export const HorizontalLine = styled.div`
    width:100%;
    position: absolute;
    height: 1px;
    background:#e7e7e7;
    top:${(props:{top:number})=>props.top+'px'};
`

export const VerticalLine = styled.div`
    width:1px;
    position: absolute;
    height: 100%;
    background:#e7e7e7;
    left:${(props:{top:number})=>props.top+'px'};
`

export const ReferencePoint = styled.div`
    width: 8px;
    position: absolute;
    border-radius: 50%;
    height: 8px;
    background:#e7e7e7;
    left:${(props:{left:number, top:number})=>props.left+'px'};
    top:${(props)=>props.top+'px'};
`

export const Diagonal = styled.div`
    width: 367.7px;
    height: 1px;
    background:#e7e7e7;
    position: absolute;
    transform-origin: left;
    transform: ${(props:{left:number, top:number, angle:number})=>`rotate(${props.angle}deg)`};
    left:${(props)=>props.left+'px'};
    top:${(props)=>props.top+'px'};

`

export const Diagonal2 = styled.div`
    width: 130px;
    height: 1px;
    background:#e7e7e7;
    position: absolute;
    transform-origin: left;
    transform: ${(props:{left:number, top:number, angle:number})=>`rotate(${props.angle}deg)`};
    left:${(props)=>props.left+'px'};
    top:${(props)=>props.top+'px'};

`

export const RotateLine =  styled.div`
    width:1px;
    position: absolute;
    height: 100%;
    background:#e7e7e7;
    bottom: 50%;
    left:${(props:{left:number,angle:number})=>props.left+'px'};
    transform-origin: bottom;
    transform: ${(props)=>`rotate(${props.angle}deg)`};
`
