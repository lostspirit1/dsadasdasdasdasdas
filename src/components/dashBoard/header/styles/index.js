import styled from 'styled-components';
import { Grid,Button, Image } from 'semantic-ui-react';
import { wrapStyle,content, LogoImage, content_item , barMenu, sideBarLogo} from './styles';

export const Wrap = styled(Grid)`
    ${wrapStyle}
`;

export const Content = styled.div`
    ${content}
`;
export const SideBarLogo = styled.div`
    ${sideBarLogo}
`;
export const ContentItem = styled.div`
    ${content_item}
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

export const Logo = styled(Image)`
    ${LogoImage}
`;

export const ToggleButton = styled(Button)`

`;
export const BarButton = styled(Button)`
    ${barMenu}
`;