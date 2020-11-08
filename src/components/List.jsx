import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
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
const defaultList = {
  label: 'Test list',
  id: '',
}
const List = ({ todo = defaultList }) => {
  const dispatch = useDispatch()
  const tasks = useSelector((s) =>
    s.tasks.tasks
      .filter((task) => task.relation === todo.id)
      .sort((a, b) => a.sort - b.sort)
  )
  const [value, setValue] = useState('')
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  const createTask = () => {
    if (value.length <= 0) {
      alert('Please write more symbols') //eslint-disable-line
    } else {
      dispatch({
        type: 'CREATE_TASK',
        payload: {
          body: value,
          id: `${todo.id}${tasks.length + 1}`,
          relation: todo.id,
          isDone: false,
          sort: Number(todo.id) + tasks.length,
        },
      })
      dispatch({ type: 'UPDATE_LOCALSTORAGE' })
    }
    setValue('')
  }
  return (
    <Wrapper>
      <Header label={todo.label} id={todo.id} />
      <Form onChange={onChangeInput} onSubmit={createTask} value={value} />
      <Content>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((item) => <Row key={item.id} obj={item} />)}
      </Content>
    </Wrapper>
  )
}
export default List
