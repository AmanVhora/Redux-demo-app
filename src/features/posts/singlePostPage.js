import React from "react";
import { Link } from "react-router-dom";
import { PostAuthor } from "./postAuthor";
import { TimeAgo } from "./timeAgo";
import { ReactionButtons } from "./reactionButtons";
import { useGetPostQuery } from "../api/apiSlice";
import { Spinner } from "../../components/Spinner";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId)

  let content

  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <ReactionButtons post={post} />
        <Link to={`/posts/${post.id}/edit`} className="button">Edit Post</Link>
      </article>
    )
  }

  return (<section>{content}</section>)
}
