import { styled } from "styled-components";
import {FiSettings} from "react-icons/fi"
import {MdNotifications} from "react-icons/md"


export const HeaderContainer = styled.header`
height: 100%;
width: 100%;
grid-area:header;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row-reverse;
background-color: #FFFFFF;
padding: 0 0.5rem;
border-bottom:2px solid #e8e8e8;
`
export const StyledDiv = styled.div`
height: 100%;
width:35%;
display: flex;
justify-content:end;
align-items: center;
gap: 1rem;
@media screen and (max-width: 1509px) {
  width:60%;
  }
`
export const StyledSpan = styled.span`
display: inline-block;
height: 100%;
width: 80%;
display: flex;
justify-content: end;
align-items: center;
color: #053742;
font-size:20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 400;
word-wrap: break-word;
cursor: pointer;
`
export const StyledImage = styled.img`
height: 85%;
width: 4rem;
`
export const StyledItemsDiv = styled.div`
height: 100%;
width: 10%;
display: flex;
justify-content: start;
align-items: center;

`
export const FiSettingsIcon = styled(FiSettings)`
  height:45%;
  width: 40%;
  font-size:22px;
  color:#053742;
  cursor: pointer;
 
`;
export const MdNotificationsIcon = styled(MdNotifications)`
height:45%;
  width: 40%;
 font-size:22px;
  color:#053742;
  cursor: pointer;
 
`;
