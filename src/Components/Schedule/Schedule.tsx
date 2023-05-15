import { FC } from 'react'
import './Schedule.css'

export interface Course {
  name: string
  detail: string
  time: string
  day: string
  code: string
}

interface ScheduleProps {
  courses: Course[]
}
const colors = ['#FCD581', '#81D9E3', '#B78CFD', '#FFA6A6', '#98E08F']

const Schedule: FC<ScheduleProps> = ({ courses }) => {
  return (
    <div className='schedule'>
      {courses.map((course, index) => (
        <div
          className='course-card'
          key={index}
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <div className='course-header'>{course.name}</div>
          <div className='course-body'>
            <div>{course.detail}</div>
            <div>{course.time}</div>
            <div>{course.day}</div>
            <div>{course.code}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Schedule
