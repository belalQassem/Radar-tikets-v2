// import styled from "styled-components";

// export const StyledDiv = styled.div`

//   display: grid; 
// grid-template-rows: 4.5rem 4.1rem 4fr 0fr 1fr;
// grid-template-columns: 0.5fr 3fr .73fr 0.22fr;

// grid-template-areas: 
//  'header header  header header'
//  'Navbar Navbar  Navbar Sidebar'
//  'Leftside Content  RightSide Sidebar'
//  'Leftside Content  RightSide Sidebar'
//  'Footer Footer Footer  Sidebar';

// `
import styled from "styled-components";

export const StyledDiv = styled.div`
 
  height: 100%;
  width: 100%;
  background-color: #D2E8EE;
  display: grid;
  grid-template-rows: 4rem 3rem 2fr 1fr 0.5fr ;
  grid-template-columns: 1fr 3fr 1fr 0.22fr;
  grid-template-areas: 
 'header header  header header'
 'Navbar Navbar  Navbar Sidebar'
 'Leftside Content  RightSide Sidebar'
 'Leftside Content  RightSide Sidebar'
 'Footer Footer Footer  Sidebar';
`;
