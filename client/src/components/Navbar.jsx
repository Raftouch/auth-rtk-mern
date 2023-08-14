import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCredentials } from '../slices/auth'
import { useLogoutMutation } from '../slices/usersApi'
import { Icon } from '@iconify/react'
import { useState } from 'react'

export default function Navbar() {
  const { userInfo } = useSelector((state) => state.auth)

  const [openMenu, setOpenMenu] = useState(false)
  const navLinkStyle = "hover:bg-gray-200 px-2"

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [logout] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      // to destroy a cookie
      await logout().unwrap()
      // to clear local storage
      dispatch(clearCredentials())
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="h-[80px] w-full flex justify-between items-center px-5 border-b-2">
      <Icon
        icon="arcticons:just-dance-now"
        color="black"
        width="70"
        height="70"
      />
      <span className="flex gap-5">
        {userInfo ? (
          <>
            <div
              className="relative uppercase text-blue-600 cursor-pointer"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {userInfo.name}
            </div>
            {openMenu && (
              <div className="absolute top-20 right-3 items-end flex flex-col gap-1">
                <NavLink className={navLinkStyle} to="/dashboard">Dashboard</NavLink>
                <NavLink className={navLinkStyle} to="/profile">Profile</NavLink>
                <NavLink className={navLinkStyle} to="/logout" onClick={logoutHandler}>
                  Logout
                </NavLink>
              </div>
            )}
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
