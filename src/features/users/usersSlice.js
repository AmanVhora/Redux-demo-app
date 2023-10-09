import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client"

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded(state, action){
      state.push(action.payload)
    },
    userUpdated(state, action){
      const { id, name, dob, phone_no } = action.payload
      const user = state.find(user => user.id === id)
      if (user) {
        user.name = name
        user.dob = dob
        user.phone_no = phone_no
      }
    },
    userDeleted(state, action){
      state.splice(state.findIndex((user) => user.id === action.payload), 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions

export default usersSlice.reducer

export const selectAllUsers = state => state.users

export const selectUserById = (state, userId) => state.users.find(user => user.id === userId)
