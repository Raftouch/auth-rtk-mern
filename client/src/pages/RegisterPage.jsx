import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Button from '../components/Button'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log('submit')
  }

  return (
    <form onSubmit={submitHandler}>
      <Form>
        <div className="flex gap-5">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button>
          <button type="submit">Register</button>
        </Button>
        <div className="flex gap-5">
          <p>Already have an account?</p>
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </div>
      </Form>
    </form>
  )
}
