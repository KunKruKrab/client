import { BASE_URL } from '../Client'

export async function getSchedule() {
  const response = await fetch(`${BASE_URL}/schedule`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('CSRF_TOKEN'),
    },
  })

  return response
}
