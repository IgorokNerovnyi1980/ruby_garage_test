import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import List from '../components/List'

const TodoApp = () => {
  const todos = useSelector((s) => s.todos.todos)
  return (
    <Layout>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => <List key={todo.id} todo={todo} />)}
    </Layout>
  )
}
export default TodoApp
