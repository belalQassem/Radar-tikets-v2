import styled from "styled-components";
import {MdZoomOut,MdOutlineZoomIn,MdBrightnessHigh,MdPreview,MdBrightnessLow,MdUpdate} from "react-icons/md"
import {FaExchangeAlt}  from "react-icons/fa"
import {VscColorMode} from "react-icons/vsc"
import {PiGraphDuotone} from "react-icons/pi"


export const SidbarContainer =styled.div`
height: 100%;
width: 100%;
grid-area:sidbar;
box-sizing: border-box;
`
export const SidbarContent =styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #E8F0F2;
`
export const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-area: sidbar;
  box-sizing: border-box;
`;

export const SidebarContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #E8F0F2;
`;
const iconStyles = `
  height: 1.6rem;
  width: 1.6rem;
  color: #053742;
  cursor: pointer;
  &:active {
    background-color: #084F5F;
    color: #fff;
  }
`;
export const StyledMdZoomOut= styled(MdZoomOut)`
height: 2rem;
width: 2rem;
color: #053742;
cursor: pointer;
&:active{
    background-color:#084F5F;
    color: #fff;
}
`
export const StyledMdOutlineZoomIn= styled(MdOutlineZoomIn)`
height: 2rem;
width: 2rem;
color: #053742;
cursor: pointer;
&:active{
    background-color:#084F5F;
    color: #fff;
}
`
export const StyledMdBrightnessHigh = styled(MdBrightnessHigh)`
  ${iconStyles}
`;

export const StyledMdBrightnessLow = styled(MdBrightnessLow)`
  ${iconStyles}
`;

export const StyledMdPreview = styled(MdPreview)`
  ${iconStyles}
`;

export const StyledFaExchangeAlt = styled(FaExchangeAlt)`
  ${iconStyles}
`;

export const StyledVscColorMode = styled(VscColorMode)`
  ${iconStyles}
`;

export const StyledPiGraphDuotone = styled(PiGraphDuotone)`
  ${iconStyles}
`;

export const StyledMdUpdate = styled(MdUpdate)`
  ${iconStyles}
`;