import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDeleted, selectPostById } from "./postsSlice";
import { PostAuthor } from "./postAuthor";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const post = useSelector(state => selectPostById(state, postId))
  const dispatch = useDispatch()
  
  if (!post) {
    return(
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.userId} /><br />
        <Link to={`/posts/${post.id}/edit`} className="button">Edit Post</Link>
        <Link to="/" onClick={() => dispatch(postDeleted(post.id))} className="button" style={{margin: "0 0 8px 16px"}}>Delete Post</Link>
      </article>
    </section>
  )
}
