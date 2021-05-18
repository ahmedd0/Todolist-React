import React, { Component } from "react";
import "./addItem.css";

class AddItem extends Component {
  state = {};
  render() {
    let { handleChange, val,  } = this.props;
    return (
      <div className="form px-4">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            id="item"
            value={val}
            placeholder="type press enter"
            onKeyUp={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
    );
  }
}

export default AddItem;
