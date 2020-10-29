import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Header from './Header'
import Form from './Form'
import Row from './Row'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  background: none;
`
const Content = styled.div`
  width: 100%;
  :last-child {
    border-radius: 0 0 1rem 1rem;
  }
  background-color: ${(p) => p.theme.main};
`
const defaultObj = {
  label: 'Test list',
  id: '',
}
const List = ({ todo = defaultObj }) => {
  const tasks = useSelector((s) =>
    s.tasks.tasks.filter((task) => task.relation === todo.id)
  )
  return (
    <Wrapper>
      <Header label={todo.label} />
      <Form />
      <Content>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((item) => <Row key={item.id} obj={item} />)}
      </Content>
    </Wrapper>
  )
}
export default List
