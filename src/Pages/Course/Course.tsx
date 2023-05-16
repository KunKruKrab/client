import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useAppSelector } from '../../app/hooks'
import { selectUser } from '../../features/user/userSlice'

const Course = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    async function getCourses() {
      const res = await fetch('http://localhost:3001/courses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('CSRF_TOKEN')}`,
        },
      })
      const data = await res.json()
      setCourses(data)
    }

    getCourses()
  }, [])

  async function handleJoinCourse(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch('http://localhost:3001/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('CSRF_TOKEN')}`,
      },
      body: JSON.stringify({
        classCode: e.currentTarget.classCode.value,
      }),
    })

    console.log(res)
  }

  const user = useAppSelector(selectUser)

  return (
    <div>
      <Navbar />
      <div>
        <h1>Courses</h1>
        <ul>
          {courses.map((course: any) => (
            <div key={course.id}>
              <li key={course.id}>{course.name}</li>
              <p>Class code: {course.classCode}</p>
              <p>Profressor: {course.professor}</p>
            </div>
          ))}
        </ul>

        {user?.role === 'STUDENT' && (
          <div>
            <h3>Join Course</h3>
            <form onSubmit={handleJoinCourse}>
              <label htmlFor='classCode'></label>
              <input type='text' id='classCode' name='classCode' />
              <input type='submit' value='Join' />
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Course
