import React from 'react';
interface ContextType {
    settings: {
        stroke: string,
        strokeColor: string,
        background: string,
        showGrid: boolean,
        sections: number
      },    
    handleSettings: Function,
    displayDrawingMode: Function
  }
const ThreeContext = React.createContext<Partial<ContextType>>({});

export default ThreeContext;
