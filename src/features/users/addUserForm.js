import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userAdded } from "./usersSlice";

export const AddUserForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')

  const onFirstNameChanged = (e) => setFirstName(e.target.value)
  const onLastNameChanged = (e) => setLastName(e.target.value)
  const onUsernameChanged = (e) => setUsername(e.target.value)
  const name = firstName + lastName

  const dispatch = useDispatch()
  const canSave = [username, firstName, lastName].every(Boolean)

  const onSaveUserClicked = () => {
    if (canSave) {
      dispatch(
        userAdded({
          id: nanoid(),
          firstName,
          lastName,
          username,
          name
        })
      )
      setFirstName('')
      setLastName('')
      setUsername('')
    }
  }

  return(
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="userFirstName">First name:</label>
        <input type="text"
          id="userFirstName"
          name="userFirstName"
          value={firstName}
          onChange={onFirstNameChanged}
        />
        <label htmlFor="userLastName">Last name:</label>
        <input type="text"
          id="userLastName"
          name="userLastName"
          value={lastName}
          onChange={onLastNameChanged}
        />
        <label htmlFor="username">Username:</label>
        <input type="text"
          id="username"
          name="username"
          value={username}
          onChange={onUsernameChanged}
        />
        <button type="button" onClick={onSaveUserClicked} disabled={!canSave}>
          Save User
        </button>
      </form>
    </section>
  )
}
