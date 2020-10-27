import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
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
  width: 3rem;
  height: 100%;
  border-right: 0.1rem solid ${(p) => p.theme.error};
  margin-right: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const Checkbox = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.1rem solid ${(p) => p.theme.text};
  border-radius: 0.3rem;
  background: linear-gradient(
    to bottom,
    rgba(234, 234, 234, 1) 1%,
    rgba(234, 234, 234, 0.99) 2%,
    rgba(255, 255, 255, 0.17) 71%,
    rgba(255, 255, 255, 0) 85%
  );
  box-shadow: 0 0.2rem 0.4rem 0 rgba(214, 213, 213, 0.75);
  cursor: pointer;
  transition: 0.2s ease;
  ${(p) =>
    p.isChecked &&
    `
  :before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '✓';
    font-size: ${p.theme.h6};
    color: ${p.theme.success};
    font-weight: 700;
  }
  `};
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
  padding-left: ${(p) => p.theme.sidePad};
  border-left: 0.1rem solid ${(p) => p.theme.form};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IconWrp = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-right: 0.1rem solid ${(p) => p.theme.form};
  :last-child {
    border-right: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const defaultObj = {
  body: 'some todo ..',
}

const Row = ({ obj = defaultObj }) => (
  <Wrapper>
    <CheckWrp isChecked={false}>
      <Checkbox />
    </CheckWrp>
    <Body>{obj.body}</Body>
    <ActionWrp>
      <IconWrp>
        <Icon
          name="triangle"
          color="text"
          width="0.7rem"
          height="0.7rem"
          style={{ marginBottom: '0.2rem' }}
        />
        <Icon
          name="triangle"
          color="text"
          width="0.7rem"
          height="0.7rem"
          rotate
        />
      </IconWrp>
      <IconWrp>
        <Icon name="pen" color="text" width="1rem" height="1rem" />
      </IconWrp>
      <IconWrp>
        <Icon name="delete" color="text" width="1rem" height="1rem" />
      </IconWrp>
    </ActionWrp>
  </Wrapper>
)
export default Row
