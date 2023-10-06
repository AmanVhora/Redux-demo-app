import React, { useState } from "react";
import { userAdded } from './usersSlice';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export const AddUserForm = () => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [phone_no, setPhone_no] = useState('')

  const onNameChanged = (e) => setName(e.target.value)
  const onDobChanged = (e) => setDob(e.target.value)
  const onPhoneNoChanged = (e) => setPhone_no(e.target.value)

  const dispatch = useDispatch()

  const onSaveUserClicked = () => {
    if (name && dob && phone_no) {
      dispatch(
        userAdded({
          id: nanoid(),
          name,
          dob,
          phone_no
        })
      )
      setName('')
      setDob('')
      setPhone_no('')
    }
  }

  return(
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="userName">Username:</label>
        <input type="text"
          id="userName"
          name="userName"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="userDob">Date of Birth:</label>
        <input type="date"
          id="userDob"
          name="userDob"
          value={dob}
          onChange={onDobChanged}
        />
        <label htmlFor="userPhoneNo">Phone no:</label>
        <input type="tel"
          id="userPhoneNo"
          name="userPhoneNo"
          value={phone_no}
          onChange={onPhoneNoChanged}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <button type="button" onClick={onSaveUserClicked}>Save User</button>
      </form>
    </section>
  )
}
