import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (
      e.currentTarget.password.value !== e.currentTarget.confirmPassword.value
    ) {
      alert('Password and Confirm Password do not match')
      return
    }

    const res = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: e.currentTarget.firstName.value,
        lastName: e.currentTarget.lastName.value,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
        role: 'STUDENT',
      }),
    })

    if (res.ok) {
      navigate('/login')
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>FirstName</label>
        <input type='text' id='firstName' name='firstName' />
        <label htmlFor='lastName'>LastName</label>
        <input type='text' id='lastName' name='lastName' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' id='confirmPassword' name='confirmPassword' />
        <input type='submit' value='Register' />
      </form>
    </div>
  )
}

export default Register
