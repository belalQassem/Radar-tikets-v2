import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  height: 15%;
  position: relative;
  background-color: #084F5F;
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
  border-radius:10px;
  /* &.NumberBoard{
    & input {
      background-color: #fff;
      order: 2;
      &:focus {
    outline: none;
    }
    &:active {
    background-color: #fff;
    color: #000;
    
  }
    }
    & Span{
      width: 45%;
    }
  }
  &.Vehicle{
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
  border-radius:10px;
  background-color:#88c2d2;
  font-family: 'Times New Roman', Times, serif;
  }
   */

  & label {
    width:60%;
    height: 100%;
    position: absolute;
    right:-23%;
    pointer-events: none;
    transform: translateY(1rem);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) ;
    font-family: 'Times New Roman', Times, serif;
    color:#e8e8e8;
    @media (min-width: 1400px) {
      font-size: 1.3rem;
    }
  }
  & input {
    width: 60%;
    direction: ltr;
    height: 60%;
    border: none;
    border-bottom: 1px solid #e8e8e8;
    
    background: none;
    padding: 1rem;
    font-size: 1rem;
    color: #f5f5f5;
    font-family: 'Times New Roman', Times, serif;
    @media (min-width: 1470px) {
      font-size: 1.5rem;
    }
    &:focus {
    outline: none;
    &:focus ~ label {
    transform: translateY(-9%) scale(0.8);
    color:#020e26;
    
    color: #2196f3;
    }
  }

  /* &:hover {
    border: 1px solid #000;
    box-shadow: 0 0 5px #000;
  }

  &:active {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  } */
  }
`;
export const StyledSpan = styled.span`
font-family: sans-serif;
color: #fff;
font-size: 1.2rem;
height:100%;
width:30%;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Times New Roman', Times, serif;
@media (min-width: 1400px) {
      font-size: 1.5rem;
    }
`