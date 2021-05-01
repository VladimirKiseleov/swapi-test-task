import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand bg-primary">
    <div className="navbar-brand">SWAPI</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item text-truncate">
        <NavLink to="/films" className="nav-link">
          Films
        </NavLink>
      </li>
      <li className="nav-item text-truncate">
        <NavLink to="/people" className="nav-link">
          People
        </NavLink>
      </li>
      <li className="nav-item text-truncate">
        <NavLink to="/planets" className="nav-link">
          Planets
        </NavLink>
      </li>
      <li className="nav-item text-truncate">
        <NavLink to="/species" className="nav-link">
          Species
        </NavLink>
      </li>
      <li className="nav-item text-truncate">
        <NavLink to="/starships" className="nav-link">
          Starships
        </NavLink>
      </li>
      <li className="nav-item text-truncate">
        <NavLink to="/vehicles" className="nav-link">
          Vehicles
        </NavLink>
      </li>
    </ul>
  </nav>
)
