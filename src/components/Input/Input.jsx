import React from 'react'
import { InputWrapper } from './style'

const Input = ({ClassName,Type,Text,Label,Id,Placeholder,Value,OnChange,Max,Min,ReadOnly,Pattern}) => {
  return (
    <InputWrapper>
      <label htmlFor={Label}>{Text}</label>
      <input id={Id} className={ClassName} type={Type} placeholder={Placeholder} value={Value} onChange={OnChange} max={Max} min={Min} readOnly={ReadOnly} pattern={Pattern}></input>
    </InputWrapper>
  )
}
export default Input;