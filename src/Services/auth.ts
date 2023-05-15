import { BASE_URL } from '../Client'

export type LoginRequest = {
  email: string
  password: string
}

export async function login(req: LoginRequest) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: req.email,
      password: req.password,
    }),
  })
  return response
}
