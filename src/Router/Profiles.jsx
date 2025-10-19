import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Profiles = () => {
  return (
    <>
    <div>Profiles</div>
    <nav className="navbar" >
        <Link to="me">My Profile</Link>
        <Link to="/profiles/Nat">Profilo Nat</Link>
    </nav>
    <div><Outlet></Outlet></div>
    </>
  )
}

export default Profiles