import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

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
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ActionWrp = styled.div`
  width: 4.5rem;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ label = 'default' }) => (
  <Wrapper>
    <Icon
      name="calendar"
      color="icon"
      width="3rem"
      height="3rem"
      style={{ marginRight: '1rem' }}
    />
    <p>{label}</p>
    <ActionWrp>
      <Icon
        name="pen"
        color="form"
        width="1.5rem"
        height="1.5rem"
        style={{ cursor: 'pointer' }}
      />
      <Icon
        name="delete"
        color="form"
        width="1.5rem"
        height="1.5rem"
        style={{ cursor: 'pointer' }}
      />
    </ActionWrp>
  </Wrapper>
)
export default Header
