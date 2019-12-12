import React, { Component } from 'react';
import './App.css';
import CreatePost from './components/createPost'

class App extends Component {
  constructor(props) {
    super(props)
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
      title: this.state.title
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

    this.setState({
      posts: [...posts, sentPost]
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Reddit</h1>

        <CreatePost
          postSubmit={this.postSubmit}
          onContentChange={this.onContentChange}
          title={this.state.title}
          content={this.state.content}
        />
        {this.state.posts.map((post, key) =>
          <div key={key} className={(post.voteCount >= 0) ? "post-wrapper" : " post-wrapper post-wrapper-negative"}>
            <h4> {post.title}</h4>
            <p> {post.content}</p>
            <p>{post.voteCount}</p>
            <button onClick={(e) => this.vote(e, post, "plus")}>Vote Up! </button>
            <button onClick={(e) => this.vote(e, post, "minus")}>Vote Down! </button>
          </div>
        )
        }
      </div>
    );
  }
}
export default App;
