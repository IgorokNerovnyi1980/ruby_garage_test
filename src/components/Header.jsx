import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding-top: 1.2rem;
  padding-left: ${(p) => p.theme.sidePad};
  padding-right: ${(p) => p.theme.sidePad};
  padding-bottom: 1.2rem;
  background-color: ${(p) => p.theme.accent};
  p {
    font-size: ${(p) => p.theme.h3};
    font-weight: 600;
    color: ${(p) => p.theme.main};
  }
`

const Header = ({ label = 'default' }) => (
  <Wrapper>
    <p>{label}</p>
  </Wrapper>
)
export default Header
