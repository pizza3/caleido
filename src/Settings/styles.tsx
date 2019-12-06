import styled from 'styled-components'

export const SettingsContain = styled.div`
    position: relative;
    width: 250px;
    height: 100%;
    background:#ffffff;
    border-left: 1px solid #d1d1d1;
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
    color: #535353;
    margin-top: 4px;
    font-size: 11px;

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

export const ColorPicker = styled.input`
    width: 141px;
    height: 25px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    margin-right: 7px;

`


export const Switch = styled.label`
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
    i {
    position: relative;
    display: inline-block;
    margin-right: 0.5rem;
    width: 46px;
    height: 26px;
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
    left: 0;
    width: 22px;
    height: 22px;
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
