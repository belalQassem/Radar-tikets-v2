// import React from 'react'
// import { InputWrapper,StyledSpan } from './style'

// const CustomInput = ({inputConfig,Span}) => {
//   return (
//     <InputWrapper className={inputConfig.ClassName}>
//        <input id={inputConfig.Id} type={inputConfig.Type} placeholder={inputConfig.Placeholder} value={inputConfig.Value} onChange={inputConfig.OnChange}></input>
//       <label htmlFor={inputConfig.HtmlFor}>{inputConfig.Label}</label>
//       <StyledSpan>{Span}</StyledSpan>
//     </InputWrapper>
//   )
// }
// export default CustomInput;

// import React from 'react'
// import { styled } from 'styled-components';
// import {StyledSpan } from './style'

// const InputGroupContainer = styled.div`
//   font-family: 'Segoe UI', sans-serif;
  
//   position: relative;
//   width: 100%;
//   height: 5%;
//   position: relative;
//   background-color: #084F5F;
//   display: flex;
//   flex-direction:row;
//   justify-content: space-around;
//   align-items: center;
//   border-radius:10px;
//   direction: rtl;
// `;

// const Input = styled.input`
//   font-size: 100%;
//   padding: 0.8em;
//   outline: none;
//   border: 2px solid rgb(200, 200, 200);
//   background-color: transparent;
//   border-radius: 20px;
//   width: 100%;

//   &:focus, &:valid {
//     border-color: rgb(150, 150, 200);
//   }
// `;

// const Label = styled.label`
//   font-size: 100%;
//   position: absolute;
//   right: 0;
//   padding: 0.8em;
//   margin-left: 0.5em;
//   pointer-events: none;
//   transition: all 0.3s ease;
//   color:#fff;

//   ${Input}:focus ~ &,
//   ${Input}:valid ~ & {
//     transform: translateY(-65%) scale(0.7);
//     margin: 0;
//     margin-right: 1.3em;
//     padding: 0.4em;
//     background-color: #084F5F;
//   }
// `;

// const CustomInput = ({inputConfig,Span}) => {
//   return (
//     <InputGroupContainer className={inputConfig.ClassName}>
//       <Input id={inputConfig.Id} type={inputConfig.Type} required placeholder={inputConfig.Placeholder} value={inputConfig.Value} onChange={inputConfig.OnChange} autoComplete="off"  />
//       <Label htmlFor={inputConfig.HtmlFor}>{inputConfig.Label}</Label>
//       <StyledSpan>{Span}</StyledSpan>
//     </InputGroupContainer>
//   );
// };

// export default CustomInput;
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  direction:  rtl;
  width: 100%;
  height: 12%;
  &.Vehicle{
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2px;
  font-family: 'Times New Roman', Times, serif;
  & input{
    background-color: #63afc4;
    color: #fff;

    &::placeholder{
    color:#084F5F;
    font-size: 16px;
    font-weight: bold;
  }
  }
  & span {
    height: 100%;
    border: 1px solid#CDD9ED;
  }
  }
`;

const StyledSpan = styled.span`
  white-space: nowrap;
  display: block;
  text-align: center;
  width:40%;
  padding: 8px 12px;
  font-size: 16px; 
  color:  #0C6579;
  background-color:#d4def5;
  border: 1px solid#CDD9ED;
  font-weight: bold;
  border-radius: 6px 0 0 6px;
  transition: 0.3s ease, border 0.3s ease, color 0.3s ease;
`;

const StyledLabel = styled.label`
 font-size: 100%;
 display: none;
  position: absolute;
  right: 40px;
  top: -5px;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color:#fff;
`
const Input = styled.input`
  display: block;
  width: 60%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  font-family: inherit;
  border-radius: 0 6px 6px 0;
  appearance: none;
  color: #053742;
  border: 1px solid #CDD9ED;
  background: #fff;
  transition: border 0.3s ease;
  outline: none;
  &::placeholder{
    color:#63afc4;
  }
  &:focus {
    border-color: #148cd1;
    ~ ${StyledSpan} {
      color: #fff;
      background-color: #148cd1;
      border: 1px solid #148cd1;
    }
    ~ ${StyledLabel} {
      transform: translate(-30%,0%) scale(0.6);
      margin: 0;
      margin-right: .5em;
      padding: 0.4em;
      background-color: #084F5F;
      color: #fff;
    }
  }
  
`;

const CustomInput = ({inputConfig,Span}) => {

  
  return (
    <InputContainer className={inputConfig.ClassName} >
      <Input id={inputConfig.Id} type={inputConfig.Type} placeholder={inputConfig.Label} value={inputConfig.Value} onChange={inputConfig.OnChange} />
      <StyledLabel htmlFor={inputConfig.HtmlFor}>{inputConfig.Label}</StyledLabel>
      <StyledSpan>{inputConfig.Value && Span}</StyledSpan>
    </InputContainer>
  );
};

export default CustomInput;

