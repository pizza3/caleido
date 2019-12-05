import styled from 'styled-components'


export const Container = styled.div`
    position: fixed;
    width: 250px;
    height: 100vh;
    border-right: 1px solid #d1d1d1;
    background: #fff;
    display: flex;
    overflow-y:auto;
    flex-direction: column;
    z-index: 1;
    transition: 0.3s;
    transform: ${(props:{show:boolean})=>props.show?`translate(0px, 0px)`:`translate(-250px, 0px)`};
`

export const OptionContain = styled.div`
    position: relative;
    width: 100%;
    height:197px;
    border-bottom: 1px solid #d1d1d1;
    cursor: pointer;
    padding: 4px;
    color: #000;
    background: #fff;
    transition: 0.3s;

    &:hover{
        color: #d1d1d1;
        background: #000;
    }
`

export const OptionImg = styled.img`
    width: 240px;
    height: 160px;
    
`

export const OptionTitle = styled.div`
    font-size: 22px;
    font-weight: 900;
`

