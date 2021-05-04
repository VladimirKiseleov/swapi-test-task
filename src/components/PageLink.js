import React from 'react'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Button } from 'antd'

export const PageLink = (props) => {
  return (
    <NavLink exact to={props.props}>
      <Button type="primary">Открыть страницу</Button>
    </NavLink>
  )
}
