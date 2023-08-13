import styled from "styled-components";
import {BsSearch} from "react-icons/bs"
import {FiEdit} from "react-icons/fi"
import {RiDeleteBin6Line} from "react-icons/ri"
import {AiFillPrinter} from "react-icons/ai"
import {MdExitToApp} from "react-icons/md"


export const StyledDiv = styled.div`

grid-area:RightSide;
width:100%;
height: 100%;
padding:1px 3px;
display: grid;
grid-template-rows: 1fr 3fr 1fr 0.5fr ; 
grid-template-columns: 1fr;
grid-template-areas: 
 'ImgDiv'
 'DetailsDiv'
 'VehicleDetailsDiv'
 'Items ';
`
export const StyledImageDiv = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
box-sizing: border-box;
overflow-y:scroll;
grid-area:ImgDiv;
`
export const Items = styled.div`
height: 100%;
width: 100%;
background-color: #e8e8e8;
display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: normal;
color: #fff;
grid-area:Items;

`
export const IconSearch = styled(BsSearch)`
height: 58.69%;
width: 16%;
display: block;
padding: 2px;
background-color: #084F5F;
color:#fff ;
text-align: center;
font-size: 1rem;
cursor: pointer;
&:hover{
    background-color: #148cd1;
}
`
export const EditIcon = styled(FiEdit)`
height: 58.69%;
width: 16%;
display: block;
padding: 2px;
background-color: #084F5F;
color:#fff ;
text-align: center;
font-size: 1rem;
cursor: pointer;
&:hover{
    background-color: #148cd1;
}

`
export const DeleteIcon = styled(RiDeleteBin6Line)`
height: 58.69%;
width: 16%;
display: block;
padding: 2px;
background-color: #084F5F;
color:#fff ;
text-align: center;
font-size: 1rem;
cursor: pointer;
&:hover{
    background-color: #148cd1;
}

`
export const PrinterIcon = styled(AiFillPrinter)`
height: 58.69%;
width: 16%;
display: block;
padding: 2px;
background-color: #084F5F;
color:#fff ;
text-align: center;
font-size: 1rem;
cursor: pointer;
&:hover{
    background-color: #148cd1;
}
`
export const StyledMdExitToApp= styled(MdExitToApp)`
height: 58.69%;
width: 16%;
display: block;
padding: 2px;
background-color: #084F5F;
color:#fff ;
text-align: center;
font-size: 1rem;
cursor: pointer;
&:hover{
    background-color: red;
}
`