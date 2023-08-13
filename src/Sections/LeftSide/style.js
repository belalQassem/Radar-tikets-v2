import styled, { keyframes } from "styled-components";
import { MdCategory } from 'react-icons/md'
import { SiMercedes } from 'react-icons/si'
import { MdOutlineColorLens } from 'react-icons/md'
import { BiSolidCategory } from 'react-icons/bi'
import { FaCalendarAlt } from 'react-icons/fa'
import { BsPersonVcardFill } from 'react-icons/bs'
import { RiPassExpiredLine } from 'react-icons/ri'


export const StyledDiv = styled.div`

grid-area:Leftside;
width:100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-color: #e8e8e8;
color: black;
padding-left: 3px;
`
export const StyledNestedDiv = styled.div`
width:100%;
height: 10%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
background-color: red;
`
export const StyledInputsDiv = styled.div`
height: 40%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
background-color: #e8e8e8;
`
export const Details = styled.div`
height: 60%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
color: #616161;
background-color: #fff;
`
export const ItemWraper = styled.div`
height: 10%;
width: 95%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row-reverse;
background-color: #fff;
border-bottom: 1px solid #E0E0E0;
`
export const Item = styled.div`
width :50%;
height: 100%;
display: flex;
justify-content: end;
gap: 15px;
align-items: center;
flex-direction: row-reverse;
@media (max-width: 1500px) {
width :60%;
}
`
export const StyledSpan = styled.span`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.2rem;
height: 100%;
width: 50%;
direction: rtl;

font-family: 'Times New Roman', Times, serif;
color: #0C6579;
@media (min-width: 1400px) {
      font-size: 1.5rem;
    }

`
export const StyledSpan2 = styled(StyledSpan)`
width:50%;
margin-right: 10px;
@media (min-width: 1400px) {
      font-size: 1.5rem;
    }
`
const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`;

export const Button = styled.button`
  display: flex;
  font-family: 'Times New Roman', Times, serif;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 8px;
  height: 36px;
  width: 95%;
  border: none;
  background: #053742;
  color: #FFF;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #5e41de4d;
  }

  &:hover .svg-icon {
    animation: ${spin} 2s linear infinite;
  }
  &:hover span {
    color: #000;
  }
`;

export const Label = styled.span`
  line-height: 20px;
  font-size: 17px;
  color: #FFF;
  font-weight: 600;
  font-family: sans-serif;
  letter-spacing: 1px;
`;



 export  const SvgIcon = styled.svg`
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke: #5d41de;
`;


export const Path = styled.path`
  fill-rule: evenodd;
`;
export const StyledMdCategory = styled(MdCategory)`
    width: 1.4rem;
    height:  1.4rem;
    margin-right: 10px;
    color: #fff;
    background-color: #084F5F;
    padding: 1px;
  `;
  export const StyledSiMercedes = styled(SiMercedes)`
    width: 1.4rem;
    height:  1.4rem;
    color: #fff;
    background-color: #084F5F;
    padding: 2px;
    margin-right: 10px;
    `;
    export const StyledMdOutlineColorLens = styled(MdOutlineColorLens)`
    width: 1.4rem;
    height:  1.4rem;
    color: #fff;
    background-color: #084F5F;
    padding: 1px;
    margin-right: 10px;
    `;
    export const StyledBiSolidCategory = styled(BiSolidCategory)`
    width: 1.4rem;
    height:  1.4rem;
    color: #fff;
    background-color: #084F5F;
    padding: 2px;
    margin-right: 10px;
    `;
    export const StyledFaCalendarAlt = styled(FaCalendarAlt)`
    width: 1.4rem;
    height:  1.4rem;
    color: #fff;
    background-color: #084F5F;
    padding: 2px;
    margin-right: 10px;
    `;
    export const StyledBsPersonVcardFill = styled(BsPersonVcardFill)`
    width: 1.4rem;
    height:  1.4rem;
    color: #fff;
    background-color: #084F5F;
    padding: 2px;
    margin-right: 10px;
    `;
    export const StyledRiPassExpiredLine = styled(RiPassExpiredLine)`
    width: 1.4rem;
    height:  1.4rem;
    color: #fff;
    background-color: #084F5F;
    padding: 2px;
    margin-right: 10px;
    `;
    