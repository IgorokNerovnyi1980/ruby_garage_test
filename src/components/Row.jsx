import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  padding-left: ${(p) => p.theme.sidePad};
  padding-right: ${(p) => p.theme.sidePad};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.1rem solid ${(p) => p.theme.form};
  :first-child {
    border-top: none;
  }
`
const CheckWrp = styled.div`
  width: 5rem;
  height: 100%;
  border-right: 0.1rem solid ${(p) => p.theme.error};
  margin-right: 0.5rem;
`
const Body = styled.p`
  height: 100%;
  padding-left: 2rem;
  border-left: 0.1rem solid ${(p) => p.theme.error};
  color: ${(p) => p.theme.text};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ActionWrp = styled.div`
  width: 10rem;
  height: 100%;
  margin-left: auto;
  border-left: 0.1rem solid ${(p) => p.theme.form};
`
const defaultObj = {
  body: 'some todo ..',
}

const Row = ({ obj = defaultObj }) => (
  <Wrapper>
    <CheckWrp />
    <Body>{obj.body}</Body>
    <ActionWrp />
  </Wrapper>
)
export default Row
