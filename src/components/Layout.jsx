import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Title from './Title'
import AddButton from './AddButton'

const Wrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: ${(p) => p.theme.todoBgGradient};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Content = styled.div`
  width: 95%;
  max-width: 80rem;
`

const Layout = ({ children = () => {} }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Title title="Simple todo lists" subTitle="from ruby garage" />
      <Content>{children}</Content>
      <AddButton onAction={() => dispatch({ type: 'OPEN_CREATOR' })} toBottom />
    </Wrapper>
  )
}

export default Layout
