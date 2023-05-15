import { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
// import Schedule, { Course } from '../../Components/Schedule/Schedule'
import { getSchedule } from '../../Services/schedule'

interface Course {
  id: string
  classCode: string
  name: string
  description: string
  professor: string
  createdAt: string
}

interface Schedule {
  id: string
  courseID: string
  startTime: string
  endTime: string
  day: string
}

interface ScheduleResponse {
  course: Course
  scheduleList: Schedule[]
}

interface Obj {
  [key: string]: {
    name: string
    description: string
    professor: string
    startTime: string
    endTime: string
  }[]
}

const Home = () => {
  const [schedules, setSchedules] = useState<Obj>({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  })

  useEffect(() => {
    async function fetchSchedule() {
      const response = await getSchedule()

      if (response.ok) {
        const data = await response.json()
        const obj = convertToSchedule(data)
        setSchedules(obj)
      }
    }

    fetchSchedule()
  }, [])

  function compareTime(timeA: string, timeB: string) {
    const [hoursA, minutesA] = timeA.split(':').map((str) => parseInt(str, 10))
    const [hoursB, minutesB] = timeB.split(':').map((str) => parseInt(str, 10))

    if (hoursA < hoursB) {
      return -1
    } else if (hoursA > hoursB) {
      return 1
    } else {
      if (minutesA < minutesB) {
        return -1
      } else if (minutesA > minutesB) {
        return 1
      } else {
        return 0
      }
    }
  }

  function convertToSchedule(jsonData: any) {
    const daysOfWeek: Obj = {
      SUNDAY: [],
      MONDAY: [],
      TUESDAY: [],
      WEDNESDAY: [],
      THURSDAY: [],
      FRIDAY: [],
      SATURDAY: [],
    }

    jsonData.forEach((item: ScheduleResponse) => {
      const { course, scheduleList } = item
      scheduleList.forEach((schedule) => {
        const { day, startTime, endTime } = schedule
        const { name, description, professor } = course

        const courseInfo = {
          name,
          description,
          professor,
          startTime,
          endTime,
        }

        daysOfWeek[day].push(courseInfo)
      })
    })

    Object.keys(daysOfWeek).forEach((day) => {
      daysOfWeek[day].sort((a, b) => {
        return compareTime(a.startTime, b.startTime)
      })
    })

    return daysOfWeek
  }

  return (
    <div>
      <Navbar />
      {Object.entries(schedules).map(([day, daySchedules]) => (
        <div key={day}>
          <h2>{day}</h2>
          <div
            style={{
              minHeight: '100px',
              backgroundColor: 'lightgray',
              borderRadius: '5px',
              margin: '10px 0',
            }}
          >
            {daySchedules.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ไม่มีเรียน
              </div>
            ) : (
              daySchedules.map((schedule, index) => (
                <div key={index}>
                  <h3>{schedule.name}</h3>
                  <p>{schedule.description}</p>
                  <p>{schedule.professor}</p>
                  <p>{schedule.startTime}</p>
                  <p>{schedule.endTime}</p>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
      {/* <Schedule courses={courses} /> */}
    </div>
  )
}

export default Home
