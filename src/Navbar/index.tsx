import React from 'react';
import { NavContain, Title } from './styles';
import Menu from './Menu';



const Navbar : React.FC = ()=>{
  return(
    <NavContain>
      <Menu />
      <Title>CALEIDO</Title>
    </NavContain>

  )
}

export default Navbar;