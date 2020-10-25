import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding-top: 1.2rem;
  padding-left: ${(p) => p.theme.sidePad};
  padding-right: ${(p) => p.theme.sidePad};
  padding-bottom: 1.2rem;
  background-color: ${(p) => p.theme.form};
`

const Form = ({ label = 'default' }) => (
  <Wrapper>
    <p>{label}</p>
  </Wrapper>
)
export default Form
