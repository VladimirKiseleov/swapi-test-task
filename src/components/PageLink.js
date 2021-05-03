import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageLink = (props) => {
  return (
    <NavLink exact to={props.props} className="btn btn-primary">
      Открыть страницу
    </NavLink>
  )
}
