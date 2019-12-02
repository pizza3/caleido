import styled from 'styled-components'

export const SettingsContain = styled.div`
    position: fixed;
    width: 250px;
    height: 100vh;
    right:0;
    border-left: 1px solid #d1d1d1;
    display: flex;
`
export const PropContain = styled.div`
    position: relative;
    width: 250px;
    height: 50px;
    display: flex;
    padding-top: 14px;
    padding-left: 8px;
    padding-right: 8px;
    justify-content: space-between;
    border-bottom: 1px solid #d1d1d1;
`

export const PropTitle = styled.div`
    font-weight: 900;
    color: #a6a6a6;

`

export const SelectBox = styled.select`
    margin-right: 7px;
    width: 141px;
    border: 1px solid #d1d1d1;
    color: #5670ff;
    outline: 0;
    height: 25px;
    border-radius: 2px;
    line-height: 10px;
    font-size: 10px;
`
