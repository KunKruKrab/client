import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IUser {
  email: string
  fullName: string
  role: string
  token: string
}

interface IUserSlice {
  authUser: IUser | null
  isAuthenticated: boolean
}

const initialState: IUserSlice = {
  authUser: null,
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action: PayloadAction<IUser | null>) => {
      state.isAuthenticated = true
      state.authUser = action.payload
    },
    setLogoutUser: (state) => {
      state.isAuthenticated = false
      state.authUser = null
    },
  },
})

export const { setAuthenticatedUser, setLogoutUser } = userSlice.actions

export const selectUser = (state: { user: IUserSlice }) => state.user.authUser
export const isAuthenticated = (state: { user: IUserSlice }) =>
  state.user.isAuthenticated

export default userSlice.reducer
