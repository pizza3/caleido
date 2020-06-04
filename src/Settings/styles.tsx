import styled from 'styled-components'

export const SettingsContain = styled.div`
    position: absolute;
    right: ${(props:{showSettings:boolean})=>props.showSettings?'0px':'-250px'};
    width: 250px;
    height: 100%;
    background:#ffffff;
    border-left: 1px solid #f1f1f1;
    transition: 0.4s;
`

export const SettingsButton = styled.div`
    border: 1px solid #f1f1f1;
    position: absolute;
    left: -48px;
    top: -1px;
    background: white;
    border-radius: 3px;
    padding: 11px;
    cursor: pointer;
`

export const PropContain = styled.div`
    position: relative;
    width: 250px;
    height: 50px;
    display: flex;
    padding-top: 13px;
    padding-left: 5px;
    padding-right: 5px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
`

export const PropTitle = styled.label`
    font-weight: 700;
    user-select: none;
    color: #535353;
    margin-top: 4px;
    font-size: 12px;

`

export const SelectBox = styled.select`
    margin-right: 2px;
    width: 141px;
    border: 1px solid #d1d1d1;
    color: #5670ff;
    outline: 0;
    height: 26px;
    border-radius: 2px;
    line-height: 10px;
    font-size: 10px;
`

export const ColorPicker = styled.input`
    width: 141px;
    height: 26px;
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
    height: 26px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    z-index:1;
    top: 14px;
    font-weight: 600;
    font-size: 12px;
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
    border-radius: 12px;
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
    border-radius: 12px;
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
    background:${(props:{background:string, disabled:boolean,content:string})=>props.background};
    cursor:${(props)=>props.disabled?'not-allowed':'pointer'};
    &:focus{
      outline: none;
    }
    &::before {
      content: '${(props)=>`${props.content}`}';
      color: #fff;
      position: absolute;
      background-color: #000;
      width: auto;
      height: 19px;
      padding: 3px 7px 1px 7px;
      margin: -30px 0px 0px ${(props)=>`-${props.content.length}%`};
      border-radius: 4px;
      display:none;
      box-shadow: 0px 0px 12px -5px rgba(0,0,0,0.75);
    }
    &:hover{
      &::before {
        display:initial;
      }
    }



`
export const WeightsCon = styled.div`
    width: 141px;
    height: 26px;
    border: 1px solid #d1d1d1;
    border-right: none;
    border-radius: 4px;
    margin-right: 2px;
    display:flex;
    overflow:hidden;

`

export const WeightButton = styled.button`
    width: 35px;
    height: 26px;
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
      margin-top:  ${(props)=>-(props.radius /2)-1+ 'px'};
      border-radius:50%;
    }

    &:focus{
      outline: none;
    }

`

export const RangeStyle = styled.input`
  -webkit-appearance: none;
  background-color: #4f74f9;
  width: 90px;
  float: right;
  height: 4px;
  margin-top: 10px;
  border-radius: 13px;
  margin-right: 7px;
  outline: 0;
  &:focus{
      outline: none;
    }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 1);
    transition: 0.3s ease-in-out;
  }
  ::-webkit-slider-thumb:active {
    transform: scale(1.3);
  }
`;


export const RangeValue = styled.div`
  width: 35px;
  height: 26px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  padding-top: 3px;
  color: #4f74f9;
  font-weight: 500;

`

export const RangeContain = styled.div`
  display:flex;
  width: 141px;
  flex-direction: row;
  justify-content: space-between;

`

