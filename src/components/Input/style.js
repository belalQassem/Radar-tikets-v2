import styled from 'styled-components';
// export const StyledInput = styled.input`
//   width: 90%;
//   height: 50px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 0 10px;
//   margin: 10px auto;
//   font-size: 16px;

//   &:focus {
//     outline: none;
//     border: 1px solid #000;
//   }

//   &:hover {
//     border: 1px solid #000;
//     box-shadow: 0 0 5px #000;
//   }

//   &:active {
//     background-color: #fff;
//     color: #000;
//     border: 1px solid #000;
//   }

//   @media (max-width: 768px) {
//     width: 90%;
//   }
// `;

// export const Styledlabel = styled.label`
//   width: 50%;
//   padding: 0 10px;
//   font-size: 16px;

//   @media (max-width: 768px) {
//     width: 50%;
//   }
// `;
export const InputWrapper = styled.div`
  width: 100%;
  height:20%;
  display: flex;
  flex-direction:row-reverse;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1px;
  border-radius: 10px;
  background-color:#63afc4;
  & .file{
      background-color:#63afc4;
    }
    & .userCode{
      background-color:#63afc4;
    }
  

  & label {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
    @media (max-width: 1650px) {
      letter-spacing: 0px;
    }
    @media (min-width: 1400px) {
      font-size: 1.3rem;
    }
  }
  & input {
    display: block;
    width: 55%;
    height: 50%;
    border: 1px solid #fff;
    border-radius: 100px;
    font-size: 1.2rem;
    outline: none;
    text-align: center;
    color: #053742;
    font-family: 'Times New Roman', Times, serif;
    &:focus {
    outline: none;
    border: 1px solid #000;
    @media (min-width: 1400px) {
      font-size: 1.3rem;
    }
  }

  &:hover {
    border: 1px solid #000;
    box-shadow: 0 0 5px #000;
  }

  &:active {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  }
`;