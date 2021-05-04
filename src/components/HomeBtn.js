import React from 'react'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Button } from 'antd'

export const HomeBtn = () => {
  return (
    <NavLink exact to="/">
      <Button type="primary">Back to Home</Button>
    </NavLink>
  )
}
