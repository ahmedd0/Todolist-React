import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/post/Post";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    let posts = data;
    this.setState({ posts });
  }
  render() {
    return (
      <React.Fragment>
        <header id="Blog" className="compon blog py-5">
          <div className="container">
            <h1 className="mb-5">POSTS</h1>
            <div className="posts">
              <div className="row">
                {this.state.posts.map((post) => (
                  <div className="col-md-6" key={post.id} >
                    <Post post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Blog;
