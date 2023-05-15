import { BASE_URL } from '../Client'

export async function getSchedule() {
  const response = await fetch(`${BASE_URL}/schedule`)
  const data = await response.json()

  return data
}
