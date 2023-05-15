import Navbar from '../../Components/Navbar/Navbar'
import Schedule, { Course } from '../../Components/Schedule/Schedule'

const Home = () => {
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
    <div>
      <Navbar />
      <Schedule courses={courses} />
    </div>
  )
}

export default Home
