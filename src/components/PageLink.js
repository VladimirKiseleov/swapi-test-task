import React from 'react'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Button } from 'antd'

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
