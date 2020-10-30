import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import List from '../components/List'
import Title from '../components/Title'

const TodoApp = () => {
  const todos = useSelector((s) => s.todos.todos)
  return (
    <Layout>
      {todos && todos.length > 0 ? (
        todos.map((todo) => <List key={todo.id} todo={todo} />)
      ) : (
        <Title title={null} subTitle="Create your firs Todo list" />
      )}
    </Layout>
  )
}
export default TodoApp
