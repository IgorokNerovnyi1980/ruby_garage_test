import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Wrapper = styled.div`
  width: 100%;
  padding-top: 1.2rem;
  padding-left: ${(p) => p.theme.sidePad};
  padding-right: ${(p) => p.theme.sidePad};
  padding-bottom: 1.2rem;
  background-color: ${(p) => p.theme.form};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Input = styled.input`
  width: 80%;
  min-width: 5rem;
  height: 4rem;
  margin-left: 1rem;
  padding-left: 1rem;
  background-color: ${(p) => p.theme.main};
  border-radius: 0.3rem 0 0 0.3rem;
`
const Submit = styled.button`
  width: 20%;
  height: 4rem;
  background-color: ${(p) => p.theme.success};
  color: ${(p) => p.theme.main};
  font-size: ${(p) => p.theme.h5};
  font-weight: 700;
  border-radius: 0 0.3rem 0.3rem 0;
`

const Form = ({ onSubmit = () => {}, onChange = () => {}, value = '' }) => (
  <Wrapper>
    <Icon
      name="add"
      color="success"
      width="2rem"
      height="2rem"
      style={{ marginTop: '0.5rem', marginRight: '1rem' }}
    />
    <Input
      placeholder="start typing here to create a task..."
      onChange={onChange}
      value={value}
    />
    <Submit onClick={() => onSubmit()}>Add task</Submit>
  </Wrapper>
)
export default Form
