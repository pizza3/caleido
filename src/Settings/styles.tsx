import styled from 'styled-components'

export const SettingsContain = styled.div`
    position: relative;
    width: 250px;
    height: 100%;
    background:#ffffff;
    border-left: 1px solid #f1f1f1;
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
    border-bottom: 1px solid #f1f1f1;
`

export const PropTitle = styled.div`
    font-weight: 900;
    color: #535353;
    margin-top: 4px;
    font-size: 11px;

`

export const SelectBox = styled.select`
    margin-right: 2px;
    width: 141px;
    border: 1px solid #d1d1d1;
    color: #5670ff;
    outline: 0;
    height: 25px;
    border-radius: 2px;
    line-height: 10px;
    font-size: 10px;
`

export const ColorPicker = styled.input`
    width: 141px;
    height: 25px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    position: relative;
    margin-right: 2px;
    z-index:2;
    opacity:0;
    cursor: pointer;
`
export const ColorPickerOverlay = styled.div`
    width: 141px;
    position: absolute;
    height: 25px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    z-index:1;
    top: 14px;
    font-weight: 600;
    font-size: 11px;
    padding-top: 4px;
    padding-left: 9px;
    background:${(props:{background:string,color:string})=>props.background};
    color: ${(props)=>props.color};
`



export const Switch = styled.label`
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
    i {
    position: relative;
    display: inline-block;
    margin-right: 0.5rem;
    width: 44px;
    height: 24px;
    background-color: #d1d1d1;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;
  }
  i::before {
    content: "";
    position: absolute;
    left: 0;
    width: 42px;
    height: 22px;
    background-color: #d1d1d1;
    border-radius: 11px;
    transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transition: all 0.25s linear;
  }
  i::after {
    content: "";
    position: absolute;
    left: -1px;
    width: 20px;
    height: 20px;
    background-color: #ececec;
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
  }
  :active i::after {
    width: 28px;
    transform: translate3d(2px, 2px, 0);
  }
  :active input:checked + i::after {
    transform: translate3d(16px, 2px, 0);
  }
  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  input:checked + i {
    background-color: #4f74f9;
  }
  input:checked + i::before {
    transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
  }
  input:checked + i::after {
    transform: translate3d(22px, 2px, 0);
  }
`;

export const Button = styled.button`
    width: 45px;
    height: 24px;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    border: none;
    box-shadow: inset 0 0 1px #000;
    background:${(props:{background:string, disabled:boolean})=>props.background};
    cursor:${(props)=>props.disabled?'not-allowed':'pointer'};
`

export const WeightsCon = styled.div`
    width: 141px;
    height: 25px;
    border: 1px solid #d1d1d1;
    border-right: none;
    border-radius: 4px;
    margin-right: 2px;
    display:flex;
    overflow:hidden;

`

export const WeightButton = styled.button`
    width: 35px;
    height: 25px;
    border:none;
    border-right: 1px solid #d1d1d1;
    background-color: ${(props:{radius:number,active:boolean})=>props.active?'#4f73f9':'#fff'};
    cursor: pointer;
    transition: 0.3s;

    &::before {
      content: "";
      position: absolute;
      background-color: ${(props)=>props.active?'#fff':'#000'};
      width: ${(props)=>props.radius + 'px'};
      height: ${(props)=>props.radius + 'px'};
      margin-left:  ${(props)=>-props.radius/2 + 'px'};
      margin-top:  ${(props)=>-props.radius /2+ 'px'};
      border-radius:50%;
    }

    &:focus{
      outline: none;
    }

`