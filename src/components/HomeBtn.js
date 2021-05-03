import React from 'react'
import { NavLink } from 'react-router-dom'

export const HomeBtn = () => {
  return (
    <NavLink exact to="/" className="btn btn-dark">
      Back to Home
    </NavLink>
  )
}
