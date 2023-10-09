import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdated } from "./usersSlice";
import { useHistory } from "react-router-dom";

export const EditUserForm = ({ match }) => {
  const { userId } = match.params
  const user = useSelector(
    state => state.users.find(user => user.id === userId )
  )
  
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setLastName] = useState(user.lastName)
  const [username, setUsername] = useState(user.username)

  const dispatch = useDispatch()
  const history = useHistory()

  const onFirstNameChanged = (e) => setFirstName(e.target.value)
  const onLastNameChanged = (e) => setLastName(e.target.value)
  const onUsernameChanged = (e) => setUsername(e.target.value)

  const name = firstName + lastName

  const onUpdateUserClicked = () => {
    if (username && firstName && lastName) {
      dispatch(
        userUpdated({
          id: userId,
          firstName,
          lastName,
          username,
          name
        })
      )
      history.push(`/users/${userId}`)
    }
  }

  return (
    <section>
      <h2>Edit User</h2>
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
        <button type="button" className="button" onClick={onUpdateUserClicked}>Update User</button>
      </form>
    </section>
  )
}
