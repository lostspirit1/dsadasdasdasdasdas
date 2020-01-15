import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { gridMenuCss, sidebarNav,sidebarUl, sidebarLi,sidebar_a, logoItem, logoContent} from "./styles";

export const GridMenu = styled(Grid.Column)`
  ${gridMenuCss}
  @media only screen and (max-width: 767px) {
    width: ${props => props.mobile} !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: ${props => props.desktop} !important;
  }
  @media only screen and (min-width: 992px) {
    width: ${props => props.desktop} !important;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    width: ${props => props.desktop} !important;
`;

export const SidebarNav = styled.nav`
    ${sidebarNav}
`;
export const SidebarUl = styled.ul`
    ${sidebarUl}
`;
export const SideBarLi = styled.li`
    ${sidebarLi}
`;
export const SideBarA = styled.a`
    ${sidebar_a}
`;

export const LogoContent = styled.li`
    ${logoContent}
`;
export const LogoItem = styled.a`
    ${logoItem}
`;