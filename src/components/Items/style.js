import styled from "styled-components";
import {MdZoomOut,MdOutlineZoomIn,MdBrightness6,MdPreview,MdOutlineImageSearch,MdExitToApp,MdOutlineSmartDisplay,MdUpdate} from "react-icons/md"
import {FaExchangeAlt}  from "react-icons/fa"
import {VscColorMode} from "react-icons/vsc"
import {PiGraphDuotone} from "react-icons/pi"


export const SidbarContainer =styled.div`
height: 100%;
width: 100%;
grid-area:sidbar;
box-sizing: border-box;
/* @media (max-width: 1200px) {
    width: 10%;
    height: 70dvh;
    } */

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
export const StyledMdZoomOut= styled(MdZoomOut)`
height: 2rem;
width: 2rem;
color: #053742;
cursor: pointer;
`
export const StyledMdOutlineZoomIn= styled(MdOutlineZoomIn)`
height: 2rem;
width: 2rem;
color: #053742;
cursor: pointer;
`
export const StyledMdBrightness6= styled(MdBrightness6)`
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
export const StyledMdExitToApp= styled(MdExitToApp)`
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
