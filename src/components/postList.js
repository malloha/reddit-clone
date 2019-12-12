import React from 'react'
import Comment from './comments'

const PostList = (props) => {
  return (

    props.posts.map((post, key) =>
      <div key={key} className={(post.voteCount >= 0) ? "post-wrapper" : " post-wrapper post-wrapper-negative"}>
        <h4> {post.title}</h4>
        <p> {post.content}</p>
        <p>{post.voteCount}</p>

        <i className="fa fa-angle-double-up"
          onClick={(e) => props.vote(e, post, "plus")}
        ></i>
        <i className="fa fa-angle-double-down"
          onClick={(e) => props.vote(e, post, "minus")}
        ></i>
        {post.comments.length > 0 && <Comment comments={post.comments} />}

      </div>
    )


  )

}

export default PostList