import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'

// компонент кнопки зависящий от props
// при передаче props функционал перехода на страницу /props
export const PageLink = ({ props }) => {
  if (props) {
    return (
      <NavLink exact to={props}>
        <Button type="primary">Открыть страницу</Button>
      </NavLink>
    )
  } else {
    return (
      <NavLink exact to="/">
        <Button type="primary">Назад</Button>
      </NavLink>
    )
  }
}
