import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/styles.css'

// Header с навигацией по страницам
export const Navbar = () => (
  <nav className="header">
    <ul>
      <li>SWAPI</li>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/films">Films</NavLink>
      </li>
      <li>
        <NavLink to="/people">People</NavLink>
      </li>
      <li>
        <NavLink to="/planets">Planets</NavLink>
      </li>
      <li>
        <NavLink to="/species">Species</NavLink>
      </li>
      <li>
        <NavLink to="/starships">Starships</NavLink>
      </li>
      <li>
        <NavLink to="/vehicles">Vehicles</NavLink>
      </li>
    </ul>
  </nav>
)
