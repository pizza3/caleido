import React, { Component } from 'react';
import { NavContain, Title } from './styles';
import Menu from './Menu';
import Settings from './Settings';



class Navbar extends Component {

    render(){
        return(
            <NavContain>
                <Menu/>
                <Title>CALEIDO</Title>
                <Settings/>
            </NavContain>
        )
    }
}

export default Navbar;