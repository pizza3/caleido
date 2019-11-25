import React, { Component } from 'react';
import { NavContain } from './styles';
import Menu from './Menu';

class Navbar extends Component {

    render(){
        return(
            <NavContain>
                <Menu/>
            </NavContain>
        )
    }
}

export default Navbar;