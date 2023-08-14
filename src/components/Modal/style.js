import styled from "styled-components";
import {MdZoomOut,MdOutlineZoomIn,MdBrightnessHigh,MdPreview,MdOutlineImageSearch,MdBrightnessLow,MdOutlineSmartDisplay,MdUpdate} from "react-icons/md"
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
export const StyledImage =styled.img`
&:hover{
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
}
&:active{
    background-color:#BADFE9;
}
`
export const StyledContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70%;
  width: 70%;
  background-color: #fff;
  border: 2px solid #084F5F;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.2);
  padding: 3px;
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
`
export const StyledMdBrightnessHigh= styled(MdBrightnessHigh)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledMdBrightnessLow= styled(MdBrightnessLow)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledMdPreview= styled(MdPreview)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledMdOutlineImageSearch= styled(MdOutlineImageSearch)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;

`
export const StyledMdOutlineSmartDisplay= styled(MdOutlineSmartDisplay)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledFaExchangeAlt= styled(FaExchangeAlt)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledVscColorMode= styled(VscColorMode)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledPiGraphDuotone= styled(PiGraphDuotone)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
export const StyledMdUpdate= styled(MdUpdate)`
height: 1.6rem;
width: 1.6rem;
color: #053742;
cursor: pointer;
`
