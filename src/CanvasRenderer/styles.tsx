import styled from 'styled-components'

export const CanvasContain = styled.canvas`
    position: absolute;
    cursor: crosshair;
    overflow-y: hidden;
`
export const CanvasOverlay = styled.div`
    width:calc(100% - 250px);
    height: cala(100vh - 50px);
    overflow:hidden;
    position: relative;
`

export const Background = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    z-index:-1;
    background: ${(props)=>props.color};
`