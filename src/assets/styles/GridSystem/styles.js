import { css } from "styled-components";

export const reset = css`
  padding: 0 !important;
  margin: 0 !important;
`;
export const column = css`
  width: calc(100% - 240px) !important;
  padding: 0 !important;
  margin: 0 !important;
`;
export const menuStyle = css`
  background: transparent;
  box-shadow: 1px 0 10px rgba(29, 30, 58, 0.065);
  transition: all 0.3s;
`;
export const desktopBreak = value => {
  return css`
    @media only screen and (min-width: 992px) {
    width: ${value} !important;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    width: ${value} !important;
    `;
};

export const gridHeader = css`
  height: 55px;
  width:"calc(100% - 75px)" !important;
  max-height: 55px;
  background: #7578f9;
`;
export const gridContent = css`
  height: calc(100vh - 55px);
`;
