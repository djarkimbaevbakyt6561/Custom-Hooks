import React from "react";
import styled from "styled-components";
export const Input = (props) => {
  return (
    <>
      <InputForModal  value={props.value} onChange={props.onChange} type={props.type} name={props.name}></InputForModal>
    </>

  )

}

const InputForModal = styled.input`
  font-family: inherit;
  border: 1px solid #ccc;
  width: 50px;
  height: 30px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  color: #383838;
  &:hover {
    outline: none;
    background: #fff1c4;
  }
`
