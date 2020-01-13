import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { gridMenuCss} from "./styles";

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
