import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import { useAppSelector } from './app/hooks'
import { isAuthenticated } from './features/user/userSlice'
import Course from './Pages/Course/Course'

function App() {
  const isUserAuthenticated = useAppSelector(isAuthenticated)

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={isUserAuthenticated ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={!isUserAuthenticated ? <Login /> : <Navigate to='/' />}
        />
        <Route path='/register' element={<Register />} />
        <Route
          path='/course'
          element={isUserAuthenticated ? <Course /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  )
}

export default App
