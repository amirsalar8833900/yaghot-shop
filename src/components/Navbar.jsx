import React from 'react'
import { NavLink ,Link } from 'react-router-dom'
import "./Navbar.css"


export default function Navbar() {
  return (
    <div className='nav'>
      <div className="left">
       <Link to="/"> یاقوت</Link>
      </div>
      <div className="right">
        <NavLink to="/accessories"> اکسسوری</NavLink>
        <NavLink to="/beauty"> لوازم آرایشی</NavLink>
        <NavLink to="/jewerly"> بدایجات</NavLink>
        <NavLink to="/parfum"> ادکلن</NavLink>
        <NavLink to="/about"> درباره ما</NavLink>
      </div>
    </div>
  )
}
