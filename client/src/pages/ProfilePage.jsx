import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../components/Form'
import Button from '../components/Button'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { setCredentials } from '../slices/auth'
import { useUpdateUserMutation } from '../slices/usersApi'

export default function ProfilePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const [updateUser, { isLoading }] = useUpdateUserMutation()

  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)
  }, [userInfo.name, userInfo.email])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const response = await updateUser({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()
        dispatch(setCredentials({ ...response }))
        toast.success('Profile updated successfully')
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
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

        {isLoading && <Loader />}

        <Button>
          <button type="submit">Update Profile</button>
        </Button>
      </Form>
    </form>
  )
}
