import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AddTodoList = () => (
  <Wrapper>
    <Icon
      name="add"
      color="icon"
      width="1.7rem"
      height="1.7rem"
      style={{ marginTop: '0.5rem', marginRight: '1rem' }}
    />
    Add new List
  </Wrapper>
)
export default AddTodoList
