import React from "react";
import { Icon } from "semantic-ui-react";
import {
  GridStyled,
  Row,
  GridColumnStyled,
  Column
} from "../../assets/styles/GridSystem/index";
import { ButtonBar } from "../../assets/styles/HeaderSideBar/index";
import { useSelector } from "react-redux";
import SideBar from "./SideBar/menu";
import Header from "./Header/index";
const DashBoard = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <GridStyled>
      <SideBar />
      <Column>
        <GridStyled>
          <Header />
          {/* <Row content={true}
            >
              1
            </Row> */}
        </GridStyled>
      </Column>
    </GridStyled>
  );
};

export default DashBoard;
