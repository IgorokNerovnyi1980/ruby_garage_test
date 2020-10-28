import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import AddButton from './AddButton'
import Icon from './Icon'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 40rem;
  height: 20rem;
  padding: ${(p) => p.theme.sidePad};
  border-radius: 0.5rem;
  background-color: ${(p) => p.theme.form};
  box-shadow: ${(p) => p.theme.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 0.5rem;
  background-color: ${(p) => p.theme.main};
`
const IconWrp = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 3rem;
  height: 3rem;
  border: 0.1rem solid ${(p) => p.theme.text};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Creator = () => {
  const dispatch = useDispatch()
  const quantity = useSelector((s) => s.todos.todos).length
  const [value, setValue] = useState('')
  const onChangeInput = (e) => {
    setValue(e.target.value)
  }
  const createTodo = () => {
    if (value.length <= 0) {
      alert('Please write name of todolist') //eslint-disable-line
    } else {
      dispatch({
        type: 'CREATE_TODO',
        payload: {
          label: value,
          id: quantity + 1,
        },
      })
      dispatch({ type: 'CLOSE_CREATOR' })
    }
    setValue('')
  }
  return (
    <Wrapper>
      <IconWrp onClick={() => dispatch({ type: 'CLOSE_CREATOR' })}>
        <Icon
          name="add"
          color="text"
          width="2rem"
          height="2rem"
          style={{ transform: 'rotate(45deg)' }}
        />
      </IconWrp>
      <Input value={value} onChange={onChangeInput} />
      <AddButton onAction={createTodo} />
    </Wrapper>
  )
}
export default Creator
