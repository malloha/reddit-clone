import React, { Component } from 'react';
import './App.css';
import Post from './components/post'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {

    return (
      <div className="App">
        <Post />
      </div>
    )
  }
}
export default App;
