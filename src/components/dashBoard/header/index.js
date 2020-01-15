import React from 'react';
import { Row } from '../../../assets/styles/GridSystem/index';
import { Icon } from 'semantic-ui-react';
import { ButtonBar,Header } from '../../../assets/styles/HeaderSideBar/index';
import logo from '../../../assets/images/agua.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const HeaderComp = () => {
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  const dispatch = useDispatch();
  return (
    <Row rowHeader={true} >
      <Header>
        <ButtonBar onClick={id => dispatch({ type: "TOGGLE_MENU" })}>
          <Icon
            name="bars"
            size="large"
            style={{ margin: 0, padding: 0, opacity: "1", height: " 1em" }}
          />
        </ButtonBar>
      </Header>
    </Row>
  );
};

export default HeaderComp;
