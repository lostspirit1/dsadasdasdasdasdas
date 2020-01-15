import React from 'react';
import { Wrap, Content, BarButton, Logo, ContentItem } from './styles/index';
import { Icon } from 'semantic-ui-react';
import logo from '../../../assets/images/agua.svg'
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    return (
    <Wrap>
        <Content>
          <ContentItem>
            <BarButton onClick={(id) => (dispatch({type: 'TOGGLE_MENU'}))}> 
            <Icon name='bars' size='large' style={{ margin: 0, padding: 0, opacity:'1', height:' 1em'}} /> 
            </BarButton>  
          </ContentItem>
        </Content>
    </Wrap>
    )
}

export default Header;