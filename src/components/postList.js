import React from 'react'

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

        {/* 
        <button onClick={(e) => this.vote(e, post, "plus")}>Vote Up! </button>
        <button onClick={(e) => this.vote(e, post, "minus")}>Vote Down! </button> */}
      </div>
    )


  )

}

export default PostList