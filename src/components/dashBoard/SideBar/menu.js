import React from "react";
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import {
  SideBar_Nav,
  SideBar_Li,
  SideBar_Ul,
  SideBar_a,
  Header_content,
  Header_logo
} from "../../../assets/styles/SideBar/index";

import { GridColumnStyled } from '../../../assets/styles/GridSystem/index';

const SideBar = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <GridColumnStyled sideBar={true} desktop={toggleMenu ? "240px" : "75px"}>
      <SideBar_Nav>
        <SideBar_Ul>
          
          <Header_content>
            <Header_logo>
              <h2>Emasa</h2>
            </Header_logo>
          </Header_content>

          <SideBar_Li>
            <SideBar_a>
              <Icon
                name="home"
                size="large"
                style={{
                  marginRight: "10px",
                  padding: 0,
                  opacity: "1",
                  height: " 1em"
                }}
              />
              <p style={{ display: toggleMenu ? "block" : "none" }}>Home</p>
            </SideBar_a>
          </SideBar_Li>

          <SideBar_Li>
            <SideBar_a>
              <Icon
                name="home"
                size="large"
                style={{
                  marginRight: "10px",
                  padding: 0,
                  opacity: "1",
                  height: " 1em"
                }}
              />
              <p style={{ display: toggleMenu ? "block" : "none" }}>Home</p>
            </SideBar_a>
          </SideBar_Li>
        </SideBar_Ul>
      </SideBar_Nav>
    </GridColumnStyled>
  );
};
// const MenuDashBoard = () => {
//   const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
//   return (
//       <GridMenu desktop={toggleMenu ? '240px' : '75px'} mobileGrid = {toggleMenu ? '31.25%' : '12.5%'} wdscreen = { toggleMenu? '80%' : '2%'}>
//         <SidebarNav>
//           <SidebarUl>

//           <LogoContent >
//             <LogoItem>
//             <h2>Emasa</h2>
//             </LogoItem>
//           </LogoContent>

//           <LogoContent >
//             <LogoItem>
//             <h2>Area </h2>
//             </LogoItem>
//           </LogoContent>

//             <SideBarLi >

//               <SideBarA>
//                 <Icon name='home' size='large' style={{ marginRight: '10px', padding: 0, opacity:'1', height:' 1em'}} />
//                 <p style={{display: toggleMenu ? 'block' : 'none'}} >Home</p>
//               </SideBarA>

//             </SideBarLi>

//             <SideBarLi >

//               <SideBarA>
//                 <Icon name='home' size='large' style={{ marginRight: '10px', padding: 0, opacity:'1', height:' 1em'}} />
//                 <p style={{display: toggleMenu ? 'block' : 'none'}}>Home2</p>
//               </SideBarA>

//             </SideBarLi>

//           </SidebarUl>
//         </SidebarNav>
//       </GridMenu>
//   );
// }

export default SideBar;
