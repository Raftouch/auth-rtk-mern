import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="h-[80px] w-full flex justify-between items-center px-5 border-b-2">
      <NavLink to="/">
        <img src="" alt="" />
      </NavLink>
      <span className="flex gap-5">
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </span>
    </nav>
  )
}
