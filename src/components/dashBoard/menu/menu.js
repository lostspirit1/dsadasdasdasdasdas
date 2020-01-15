import React from 'react';
import './style.css';
import { GridMenu,SidebarNav,SidebarUl,SideBarLi,SideBarA, LogoContent, LogoItem } from './styles/index';
import { Icon } from 'semantic-ui-react';
import { useSelector } from "react-redux";

const MenuDashBoard = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
      <GridMenu desktop={toggleMenu ? '240px' : '75px'} mobileGrid = {toggleMenu ? '31.25%' : '12.5%'} wdscreen = { toggleMenu? '80%' : '2%'}>
        <SidebarNav>
          <SidebarUl> 
            
          <LogoContent >
            <LogoItem>
            <h2>Emasa</h2>
            </LogoItem>
          </LogoContent>

          <LogoContent >
            <LogoItem>
            <h2>Area </h2>
            </LogoItem>
          </LogoContent>

            <SideBarLi >

              <SideBarA>
                <Icon name='home' size='large' style={{ marginRight: '10px', padding: 0, opacity:'1', height:' 1em'}} /> 
                <p style={{display: toggleMenu ? 'block' : 'none'}} >Home</p>
              </SideBarA>

            </SideBarLi>

            <SideBarLi >

              <SideBarA>
                <Icon name='home' size='large' style={{ marginRight: '10px', padding: 0, opacity:'1', height:' 1em'}} /> 
                <p style={{display: toggleMenu ? 'block' : 'none'}}>Home2</p>
              </SideBarA>

            </SideBarLi>

          </SidebarUl>
        </SidebarNav>
      </GridMenu>
  );
}

export default MenuDashBoard;