import React from 'react'
import { login } from '../../Services/auth'
import { useAppDispatch } from '../../app/hooks'
import { setAuthenticatedUser } from '../../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    if (!email || !password) {
      alert('Please enter email and password')
      return
    }

    const response = await login({ email, password })

    if (response.ok) {
      const data = await response.json()
      dispatch(setAuthenticatedUser(data))
      localStorage.setItem('CSRF_TOKEN', data.token)
      navigate('/')
      return
    }

    alert('Email or password is incorrect, please try again')
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
