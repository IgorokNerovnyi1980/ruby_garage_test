import React, { useState } from 'react'
import styled from 'styled-components'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { useDispatch, useSelector } from 'react-redux'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  background-color: ${(p) => p.theme.form};
  box-shadow: ${(p) => p.theme.boxShadow};
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const BtnWrp = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.button`
  background-color: ${(p) => (p.isCancel ? p.theme.accent : p.theme.success)};
  padding: 1rem 1.5rem;
  margin-right: 0.5rem;
  color: ${(p) => p.theme.main};
  font-size: ${(p) => p.theme.h5};
  font-weight: 700;
  border-radius: 0 0.3rem 0.3rem 0;
`

const Calendar = () => {
  const dispatch = useDispatch()
  const id = useSelector((s) => s.general.taskId)
  const tasks = useSelector((s) => s.tasks.tasks)
  const [myDate, setMyDate] = useState(new Date())

  const handleDayClick = (day) => {
    setMyDate(day)
  }
  const closeCalendar = () => {
    dispatch({ type: 'CLOSE_CALENDAR' })
  }

  const saveDate = () => {
    const currentTask = tasks.find((task) => task.id === id)
    dispatch({
      type: 'EDIT_TASK',
      task: { ...currentTask, dedLine: myDate.toLocaleDateString() },
      id: currentTask.id,
    })

    dispatch({ type: 'SET_TASK_ID', payload: null })
    dispatch({ type: 'CLOSE_CALENDAR' })
    dispatch({ type: 'UPDATE_LOCALSTORAGE' })
  }

  return (
    <Wrapper>
      <DayPicker selectedDays={myDate} onDayClick={handleDayClick} />
      <BtnWrp>
        <Btn isCancel onClick={closeCalendar}>
          Cancel
        </Btn>
        <Btn isCancel={false} onClick={saveDate}>
          Save
        </Btn>
      </BtnWrp>
    </Wrapper>
  )
}
export default Calendar
