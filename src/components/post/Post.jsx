import React, { Component } from "react";
import "./post.css";
class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="post">
          <h2>{this.props.post.title.split(" ").splice(0,4).join(" ")}</h2>
          <p>{this.props.post.body}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
