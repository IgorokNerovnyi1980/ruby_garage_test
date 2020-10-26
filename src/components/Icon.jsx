import React, { useMemo } from 'react'
import styled from 'styled-components'
import { ReactComponent as Add } from '../assets/svg/add.svg'
import { ReactComponent as Calendar } from '../assets/svg/calendar.svg'
import { ReactComponent as Delete } from '../assets/svg/delete.svg'
import { ReactComponent as Pen } from '../assets/svg/pen.svg'
import { ReactComponent as Triangle } from '../assets/svg/triangle.svg'

const icons = {
  add: <Add />,
  calendar: <Calendar />,
  delete: <Delete />,
  pen: <Pen />,
  triangle: <Triangle />,
}

const Wrapper = styled.span`
  svg {
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    fill: ${(p) => p.theme[p.color]};
  }
`
export default ({
  name = 'add',
  color = 'main',
  style = null,
  width = '3rem',
  height = '3rem',
  onClick = () => {},
}) =>
  useMemo(
    () =>
      icons.hasOwnProperty(name) && (
        <Wrapper
          style={style}
          name={name}
          color={color}
          onClick={onClick}
          width={width}
          height={height}
        >
          {icons[name]}
        </Wrapper>
      ),
    [style, onClick, name, color]
  )
