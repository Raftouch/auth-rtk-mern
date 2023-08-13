import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../components/Form'
import Button from '../components/Button'
import { useLoginMutation } from '../slices/usersApi'
import { setCredentials } from '../slices/auth'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    // user is logged in
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await login({ email, password }).unwrap()
      // setting user to local storage & state
      dispatch(setCredentials({ ...response }))
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Form>
        <div className="flex gap-5">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder=" Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button>
          <button type="submit">Login</button>
        </Button>
        <div className="flex gap-5">
          <p>No account yet?</p>
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
        </div>
      </Form>
    </form>
  )
}
