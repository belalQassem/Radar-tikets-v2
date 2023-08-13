import styled from "styled-components";

export const SidbarContainer =styled.div`
height: 100%;
width: 100%;

grid-area:Sidebar;
background-color: #fff;
border-left: 2px solid #CCC1F0;
box-sizing: border-box;



/* @media (max-width: 1200px) {
    width: 10%;
    height: 70dvh;
    } */

`
export const SidbarContent =styled.div`
height: 60%;
width: 100%;
margin-top: 60px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #FFF;
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

