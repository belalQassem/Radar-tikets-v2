import styled from "styled-components";

export const Navebar = styled.div`
  width: 100%;
  height: 100%;
  grid-area:Navbar;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  background-color: #fff;
  border-bottom: 2px solid #CCC1F0;
  `;
export const NavebarItem = styled.div`
height: 100%;
width: 12.5%;
display: flex;
justify-content:space-evenly;
align-items: center;
box-sizing: border-box;
flex-wrap:wrap;
background-color: #fff;
border: 1px solid transparent;
&:hover{
    transform: scale(1.03);
    transition: transform 0.1s ease-in-out;
    border: 1px solid #eee;
}
`;
export const StyledSpan = styled.span`
display: inline-block;
font-size:1.1rem;
color: #053742;
font-family: 'Times New Roman', Times, serif;
@media (min-width: 1400px) {
  font-size:1.5rem;
}

`
export const StyledSpan2 = styled.span`
display: inline-block;
font-size:1rem;
color: #0C6579;
font-family: 'Times New Roman', Times, serif;
&:hover{
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
}
@media (min-width: 1400px) {
  font-size:1.2rem;
}
`