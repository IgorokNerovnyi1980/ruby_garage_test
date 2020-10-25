import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import AddTodoList from './AddTodoList'

const Wrapper = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 3rem;
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

const Layout = ({ children = () => {} }) => (
  <Wrapper>
    <Title title="Simple todo lists" subTitle="from ruby garage" />
    <Content>{children}</Content>
    <AddTodoList />
  </Wrapper>
)

export default Layout
