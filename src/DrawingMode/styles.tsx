import styled from 'styled-components'


export const Container = styled.div`
    position: fixed;
    width: 250px;
    height: 100vh;
    border-right: 1px solid #f1f1f1;
    background: #fff;
    user-select: none;
    display: flex;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    z-index: 1;
    padding-bottom:50px;
    transition: 0.3s;
    transform: ${(props:{show:boolean})=>props.show?`translate(0px, 0px)`:`translate(-250px, 0px)`};
`

export const OptionContain = styled.div`
    position: relative;
    width: 100%;
    height:197px;
    border-bottom: 1px solid #f1f1f1;
    cursor: pointer;
    padding: 4px;
    color: #000;
    background: #fff;
    transition: 0.3s;
    filter: grayscale(100%);

    &:hover{
        color: #4f73f9;
        background: #000;
        filter: grayscale(0%);

    }
`

export const OptionImg = styled.img`
    width: 240px;
    height: 160px;
    user-select: none;

`

export const OptionTitle = styled.div`
    font-size: 22px;
    font-weight: 900;
    user-select: none;

`

