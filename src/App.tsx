import React from 'react'
import logo from './logo.svg'
import './App.css'
import Schedule, { Course } from './Components/Schedule/Schedule'

function App() {
  const courses: Course[] = [
    {
      name: 'Math',
      detail: 'Advanced calculus',
      time: '9:00 AM - 10:30 AM',
      day: 'Monday',
      code: 'MATH101',
    },
    {
      name: 'Physics',
      detail: 'Quantum mechanics',
      time: '11:00 AM - 12:30 PM',
      day: 'Wednesday',
      code: 'PHYS201',
    },
  ]
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <Schedule courses={courses} />
    </div>
  )
}

export default App
