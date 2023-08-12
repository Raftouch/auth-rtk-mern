import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Button from '../components/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log('submit')
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
