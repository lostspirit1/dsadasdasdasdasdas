import React from 'react';
import './style.css';
import { GridMenu  } from './styles/index';
import { useSelector } from "react-redux";

const MenuDashBoard = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
      <GridMenu desktop={toggleMenu ? '240px' : '75px'} mobileGrid = {toggleMenu ? '31.25%' : '12.5%'} wdscreen = { toggleMenu? '80%' : '2%'} />
  );
}

export default MenuDashBoard;