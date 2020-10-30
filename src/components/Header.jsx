import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
const Form = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  width: 80%;
  min-width: 5rem;
  height: 4rem;
  margin-left: 1rem;
  padding-left: 1rem;
  background-color: ${(p) => p.theme.main};
  border-radius: 0.3rem 0 0 0.3rem;
`
const Submit = styled.button`
  width: 20%;
  height: 4rem;
  background-color: ${(p) => p.theme.success};
  color: ${(p) => p.theme.main};
  font-size: ${(p) => p.theme.h5};
  font-weight: 700;
  border-radius: 0 0.3rem 0.3rem 0;
`
const ActionWrp = styled.div`
  width: 4.5rem;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = ({ label = 'default', id = null }) => {
  const dispatch = useDispatch()
  const [isForm, setIsForm] = useState(false)
  const [value, setValue] = useState('')
  const editTodoList = () => {
    setIsForm(true)
    setValue(label)
  }
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  const saveNewData = () => {
    if (value.length <= 0) {
      alert('Please write more symbols') //eslint-disable-line
    } else {
      dispatch({
        type: 'EDIT_TODO_LIST',
        payload: {
          label: value,
          id,
        },
      })
      dispatch({ type: 'UPDATE_LOCALSTORAGE' })
      setValue('')
      setIsForm(false)
    }
  }
  const deleteTodoList = (val) => {
    if (val) {
      dispatch({ type: 'DELETE_TODO_LIST', payload: val })
      dispatch({ type: 'UPDATE_LOCALSTORAGE' })
    }
  }

  return (
    <Wrapper>
      <Icon
        name="calendar"
        color="icon"
        width="3rem"
        height="3rem"
        style={{ marginRight: '1rem' }}
      />
      {isForm ? (
        <Form>
          <Input value={value} onChange={onChangeInput} />
          <Submit onClick={saveNewData}>save</Submit>
        </Form>
      ) : (
        <p>{label}</p>
      )}
      <ActionWrp>
        <Icon
          name="pen"
          color="form"
          width="1.5rem"
          height="1.5rem"
          style={{ cursor: 'pointer' }}
          onClick={() => editTodoList()}
        />
        <Icon
          name="delete"
          color="form"
          width="1.5rem"
          height="1.5rem"
          style={{ cursor: 'pointer' }}
          onClick={() => deleteTodoList(id)}
        />
      </ActionWrp>
    </Wrapper>
  )
}
export default Header
