import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  margin-top: auto;
  padding-top: 1.5rem;
  padding-left: ${(p) => p.theme.sidePad};
  padding-right: ${(p) => p.theme.sidePad};
  padding-bottom: 1.5rem;
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.accent};
  font-size: ${(p) => p.theme.h3};
  font-weight: 700;
  color: ${(p) => p.theme.main};
`

const AddTodoList = () => <Wrapper>Add new List</Wrapper>
export default AddTodoList
