import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', name: 'Aman Vhora', dob: '04/08/2002', phone_no: '9876543210' },
  { id: '2', name: 'John Doe', dob: '01/01/2001', phone_no: '9652013478' },
]
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
  }
})

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions

export default usersSlice.reducer
