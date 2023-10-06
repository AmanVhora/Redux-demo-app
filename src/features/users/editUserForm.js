import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdated } from "./usersSlice";
import { useHistory } from "react-router-dom";

export const EditUserForm = ({ match }) => {
  const { userId } = match.params
  const user = useSelector(
    state => state.users.find(user => user.id === userId )
  )
  
  const [name, setName] = useState(user.name)
  const [dob, setDob] = useState(user.dob)
  const [phone_no, setPhone_no] = useState(user.phone_no)

  const dispatch = useDispatch()
  const history = useHistory()

  const onNameChanged = (e) => setName(e.target.value)
  const onDobChanged = (e) => setDob(e.target.value)
  const onPhoneNoChanged = (e) => setPhone_no(e.target.value)

  const onUpdateUserClicked = () => {
    if (name && dob && phone_no) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          dob,
          phone_no
        })
      )
      history.push(`/users/${userId}`)
    }
  }

  return (
    <section>
      <h2>Edit User</h2>
      <form>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="userDob">Date of Birth:</label>
        <input
          type="date"
          id="userDob"
          name="userDob"
          value={dob}
          onChange={onDobChanged}
        />
        <label htmlFor="userPhoneNo">Phone no:</label>
        <input
          type="tel"
          id="userPhoneNo"
          name="userPhoneNo"
          value={phone_no}
          onChange={onPhoneNoChanged}
        />
        <button type="button" className="button" onClick={onUpdateUserClicked}>Update User</button>
      </form>
    </section>
  )
}
