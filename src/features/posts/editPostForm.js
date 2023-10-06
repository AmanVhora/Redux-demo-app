import React, { useState } from "react";
import { postUpdated } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const EditPostForm = ({ match }) => {
  const { postId } = match.params
  const post = useSelector(
    state => state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onUpdatePostClicked = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content
        })
      )
      history.push(`/posts/${postId}`)
    }
  }

  return(
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitlr"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onUpdatePostClicked}>Update Post</button>
      </form>
    </section>
  )
}
