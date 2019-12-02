import AppContext from './AppContext'
import React, {Component} from 'react'

type Props = {
    value:{},
    children: {}
}

class AppProvider extends Component<Props> {
    render() {
      const {value, children} = this.props
        return (
            <AppContext.Provider value={value}>
              {children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider
