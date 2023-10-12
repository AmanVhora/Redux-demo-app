import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserById, userDeleted } from "./usersSlice";
import { createSelector } from "@reduxjs/toolkit";
import { useGetPostsQuery } from "../api/apiSlice";

export const SingleUserPage = ({ match }) => {
  const { userId } = match.params
  const user = useSelector(state => selectUserById(state, userId))
  const dispatch = useDispatch()

  const selectPostForUser = useMemo(() => {
    const emptyArray = []
    return createSelector(
      result => result.data,
      (result, userId) => userId,
      (data, userId) => data?.filter(post => post.user === userId) ?? emptyArray
    )
  }, [])
  
  const { postsForUser } = useGetPostsQuery(undefined, {
    selectFromResult: result => ({
      ...result,
      postsForUser: selectPostForUser(result, userId)
    })
  })

  const postTitle = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

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
        <p className="user-content">Username: {user.username}</p>
        <ul>{postTitle}</ul>
        <Link to={`/users/${user.id}/edit`} className="button" style={{marginRight: '16px'}}>Edit User</Link>
        <Link to="/users" onClick={() => dispatch(userDeleted(user.id))} className="button">Delete User</Link>
      </article>
    </section>
  )
}
