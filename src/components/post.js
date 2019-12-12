import React, { Component } from 'react';
import CreatePost from './createPost'
import 'font-awesome/css/font-awesome.min.css';
import PostList from './postList'


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "maleeha",
      voteCount: 0,
      posts: [
        {
          title: "this is a post",
          content: "this is the content",
          author: "Hasan, Maleeha",
          voteCount: 0
        }
      ]

    }

  }

  onContentChange = (e) => {
    const name = e.target.name;
    const content = e.target.value;
    this.setState({
      [name]: content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
    const posts = this.state.posts;
    const newPost = {
      author: this.state.author,
      content: this.state.content,
      title: this.state.title,
      voteCount: this.state.voteCount
    }
    posts.push(newPost)

    this.setState({
      posts,
      content: "",
      title: ""
    })

  }
  vote = (e, sentPost, operator) => {
    e.preventDefault();
    const posts = this.state.posts.filter(checkPost =>
      sentPost.title !== checkPost.title
    );
    switch (operator) {
      case "plus":
        sentPost.voteCount++
        break;
      case "minus":
        sentPost.voteCount--
        break;
      default:
        console.error("Something terrible occured in vote function")
    }

    posts.push(sentPost);
    posts.sort((a, b) => b.voteCount - a.voteCount);

    this.setState({
      posts: posts
    })
  }
  render() {
    return (
      <div>
        <h1>Reddit</h1>

        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />
        <PostList
          posts={this.state.posts}
          vote={this.vote}
        />
      </div>
    )
  }

}



export default Post;