import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userDeleted } from "./usersSlice";

export const SingleUserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(
    state => state.users.find(user => user.id === userId)
  )

  const dispatch = useDispatch()
  if (!user) {
    return(
      <section>
        <h2>User not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="user">
        <h3>{user.name}</h3>
        <p className="user-content">Date of Birth: {user.dob}</p>
        <p className="user-content">Phone no: {user.phone_no}</p>
        <Link to="/users" onClick={() => dispatch(userDeleted(user.id))} className="button">Delete User</Link>
      </article>
    </section>
  )
}
