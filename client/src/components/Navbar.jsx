import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const { userInfo } = useSelector((state) => state.auth)

  return (
    <nav className="h-[80px] w-full flex justify-between items-center px-5 border-b-2">
      <NavLink to="/">
        <img src="" alt="" />
      </NavLink>
      <span className="flex gap-5">
        {userInfo ? (
          <>
            <div className="text-green-600 uppercase">{userInfo.name}</div>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </span>
    </nav>
  )
}
