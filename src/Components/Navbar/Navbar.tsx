import { FC } from 'react'
import './Navbar.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUser, setLogoutUser } from '../../features/user/userSlice'
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(setLogoutUser())
  }

  return (
    <nav className='nav-container'>
      <span>Welcome, {user?.fullName}</span>
      <h2>ตาราง{user?.role === 'TEACHER' ? 'สอน' : 'เรียน'}</h2>
      <div>
        {user?.role === 'STUDENT' && <Link to='/course'>Courses</Link>}
        <span onClick={handleLogout} style={{ marginLeft: '12px' }}>
          Logout
        </span>
      </div>
    </nav>
  )
}

export default Navbar
