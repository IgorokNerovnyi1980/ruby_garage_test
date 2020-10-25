import React from 'react'
import styled from 'styled-components'
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
  min-height: 10rem;
  border-radius: 0 0 1rem 1rem;
  background-color: ${(p) => p.theme.main};
`

const defaultObj = {
  label: 'Test list',
  id: '1',
  content: [
    { body: 'first todo', id: '11' },
    { body: 'second todo', id: '22' },
  ],
}

const List = ({ todo = defaultObj }) => (
  <Wrapper>
    <Header label={todo.label} />
    <Form label="search block" />
    <Content>
      {todo.content.length > 0 &&
        todo.content.map((item) => <Row key={item.id} obj={item} />)}
    </Content>
  </Wrapper>
)
export default List
