import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Register</h2>
      <form>
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
