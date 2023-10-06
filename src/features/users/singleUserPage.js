import React from "react";
import { useSelector } from "react-redux";

export const SingleUserPage = ({ match }) => {
  const { userId } = match.params

  const user = useSelector(
    state => state.users.find(user => user.id === userId)
  )

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
      </article>
    </section>
  )
}
