import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomeBtn = () => {
  return (
    <NavLink exact to="/" className="nav-link">
      Back to Home
    </NavLink>
  )
}
