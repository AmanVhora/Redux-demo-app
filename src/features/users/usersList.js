import React from "react";
import { useSelector } from "react-redux";
import { AddUserForm } from "./addUserForm";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const users = useSelector(state => state.users)

  const renderedUsers = users.map(user => (
    <article className="user-excerpt" key={user.id}>
      <h3>{user.name}</h3>
      <p className="user-content">Username: {user.username}</p>
      <Link to={`/users/${user.id}`} className="button muted-button">Show User</Link>
    </article>
  ))

  return(
    <>
      <AddUserForm />
      <section className="users-list">
        <h2>Users</h2>
        {renderedUsers}
      </section>
    </>
  )
}
