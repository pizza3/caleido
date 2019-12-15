import React, { Component } from 'react';
import { SelectBox, PropContain, PropTitle } from './styles';

import AppContext from '../Context/AppContext';


export default class Index extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context: any) => {
          return (
            <PropContain>
              <PropTitle>Stroke Weight</PropTitle>
            </PropContain>
          )
        }}
      </AppContext.Consumer>
    )
  }
}