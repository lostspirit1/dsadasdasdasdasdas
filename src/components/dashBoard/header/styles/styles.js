import { css } from 'styled-components';

export const wrapStyle = css`
    height: 55px;
    max-height: 55px;
    width: calc(100% - 240px) !important;  
    background: #7578F9;
    padding: 0 !important;
`;

export const content = css`
height:100%
background: transparent;
display: flex;
align-items: center;
color: #575962;
padding: 6px 25px;
width: 240px;
font-size: 14px;
cursor:pointer;
font-weight: 400;
position: relative;
margin-bottom: 3px
`;

export const LogoImage = css`
    height:100%;
`;

export const content_item = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    width:100%;
`;

export const barMenu = css`
    color: #fff !important;
    background: transparent !important;
    padding: 0 !important;
    margin: 0 !important;
`;



export const sideBarLogo = css`
height:100%
background: #fff;
display: flex;
align-items: center;
color: #575962;
padding: 6px 25px;
font-size: 14px;
cursor:pointer;
font-weight: 400;
position: relative;
margin-bottom: 3px
`;