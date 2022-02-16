import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>

        <li>
          <NavLink to="player">Player</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
