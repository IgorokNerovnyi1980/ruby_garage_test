import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  background-color: ${(p) => (p.isDone ? p.theme.selected : p.theme.main)};
  border-top: 0.1rem solid ${(p) => p.theme.form};
  :first-child {
    border-top: none;
  }
  :last-child {
    border-radius: 0 0 1rem 1rem;
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
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  border-left: 0.1rem solid ${(p) => p.theme.error};
  color: ${(p) => p.theme.text};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 2rem;
  border-left: 0.1rem solid ${(p) => p.theme.error};
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
const SubmitBtn = styled.button`
  width: 10rem;
  height: 100%;
  background-color: ${(p) => p.theme.success};
  color: ${(p) => p.theme.main};
  font-size: ${(p) => p.theme.h5};
  font-weight: 700;
  border-radius: 0 0.3rem 0.3rem 0;
`
const IconWrp = styled.div`
  width: 33%;
  height: 1.5rem;
  border-right: 0.1rem solid ${(p) => p.theme.form};
  :last-child {
    border-right: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`
const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const defaultTask = {
  body: 'some todo ..',
  id: '11',
  isDone: false,
  relation: '1',
  sort: 1,
}

const Row = ({ obj = defaultTask }) => {
  const dispatch = useDispatch()
  const myInput = useRef(null)
  const tasks = useSelector((s) => s.tasks.tasks)
  const togglerIsDone = () => {
    dispatch({ type: 'TOGGLE_STATUS_TASK', payload: obj.id })
    dispatch({ type: 'UPDATE_LOCALSTORAGE' })
  }
  const deleteRow = () => {
    dispatch({ type: 'DELETE_TASK', payload: obj.id })
    dispatch({ type: 'UPDATE_LOCALSTORAGE' })
  }
  const [value, setValue] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }

  const sortTask = (id, action) => {
    dispatch({
      type: 'SORT_TASK',
      id,
      action,
    })
    dispatch({ type: 'UPDATE_LOCALSTORAGE' })
  }

  const editTask = (id) => {
    setIsEdit(true)
    setCurrentTask(tasks.find((task) => task.id === id))
  }
  const saveChange = () => {
    if (value.length <= 0) {
      alert('Please write more symbols') //eslint-disable-line
    } else {
      dispatch({
        type: 'EDIT_TASK',
        task: { ...currentTask, body: value },
        id: currentTask.id,
      })
      setIsEdit(false)
      setCurrentTask(null)
      setValue('')
      dispatch({ type: 'UPDATE_LOCALSTORAGE' })
    }
  }
  useEffect(() => {
    if (isEdit) {
      myInput.current.focus()
    }
  }, [isEdit])
  return (
    <Wrapper isDone={obj.isDone}>
      <CheckWrp onClick={togglerIsDone}>
        <Checkbox isChecked={obj.isDone} />
      </CheckWrp>
      {isEdit ? (
        <Input ref={myInput} value={value} onChange={onChangeInput} />
      ) : (
        <Body>{obj.body}</Body>
      )}

      {isEdit ? (
        <SubmitBtn onClick={saveChange}>Save Change</SubmitBtn>
      ) : (
        <ActionWrp>
          <IconWrp>
            <Arrows>
              <Icon
                name="triangle"
                color="text"
                width="0.7rem"
                height="0.7rem"
                style={{ cursor: 'pointer' }}
                onClick={() => sortTask(obj.id, 'down')}
              />
              <Icon
                name="triangle"
                color="text"
                width="0.7rem"
                height="0.7rem"
                style={{ cursor: 'pointer' }}
                rotate={1}
                onClick={() => sortTask(obj.id, 'up')}
              />
            </Arrows>
          </IconWrp>
          <IconWrp>
            <Icon
              name="pen"
              color="text"
              width="1rem"
              height="1rem"
              style={{ cursor: 'pointer' }}
              onClick={() => editTask(obj.id)}
            />
          </IconWrp>
          <IconWrp>
            <Icon
              name="delete"
              color="text"
              width="1rem"
              height="1rem"
              style={{ cursor: 'pointer' }}
              onClick={deleteRow}
            />
          </IconWrp>
        </ActionWrp>
      )}
    </Wrapper>
  )
}
export default Row
