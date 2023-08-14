import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCredentials } from '../slices/auth'
import { useLogoutMutation } from '../slices/usersApi'
import { Icon } from '@iconify/react'

export default function Navbar() {
  const { userInfo } = useSelector((state) => state.auth)

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
            <div className="text-green-600 uppercase">{userInfo.name}</div>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout" onClick={logoutHandler}>
              Logout
            </NavLink>
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
