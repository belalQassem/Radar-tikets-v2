import styled from "styled-components";
import {FaExpandAlt} from 'react-icons/fa'
import {BsPlusLg} from 'react-icons/bs'
import {PiMinus} from 'react-icons/pi'
import {GoTriangleDown} from 'react-icons/go'


export const StyledDiv = styled.div`
grid-area:Content;
display:grid;
grid-template-columns: 1fr 2fr ;
  grid-template-rows: 1fr 1fr ;
  grid-template-areas: 
 'image1 image2 '
 'video image2 '
 ;
  gap: 1px;
  border: 1px solid #fff;
height:100%;
width:100%;

`
 export const StyledImageDiv = styled.img`
display: inline-block;
width:100%;
height:100%;
grid-area:image1;

box-sizing: border-box;
`
 export const StyledImagebig = styled.img`
   position: relative;
   display: block;
   height: 100%;
   width: 100%;
   box-sizing: border-box;
`;
export const StyledSecondDiv = styled.div`
position:relative;
height: 100%;
width: 100%;
grid-area:image2;
`

export const StyledExpandIcon = styled(FaExpandAlt)`
  height: 10%;
  width: 5%;
  color: #fff; 
 position: absolute;
  display: block;
  top: 2%;
  left: 2%;
  cursor: pointer;
  z-index: 999;
  &:active{
    color: #084F5F;
}
  
`;
export const StyledIconsDiv = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 12%;
width: 5%;
position: absolute;
top: 10%;
right: 2%;
background-color: #fff;
z-index: 999;
`
export const StyledArrowIcon = styled(GoTriangleDown)`
  font-size: 1.6rem;
  color: #fff;
  position: absolute;
  display: block;
  top:2%;
  right: 2%;
  cursor: pointer;
  z-index: 999;
  &:active{
    color: #8e8e8e;
}
  `
export const StyledPlusIcon = styled(BsPlusLg)`
  font-size: 1.6rem;
  color: #616161;
  cursor: pointer;
  z-index: 999;
  &:active{
    color: #8e8e8e;
}

`;
export const StyledMinusIcon = styled(PiMinus)`
  font-size: 1.6rem;
  color: #616161;
  cursor: pointer;
  z-index: 999;
  &:active{
    color: #8e8e8e;
}
`;

export const StyledVideo = styled.div`
grid-area:video;
height:100%;
width: 100%;
`
export const StyledVideoScene = styled.video`
height: 100%;
width: 100%;
object-fit: fill;
`