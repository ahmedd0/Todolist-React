import React, { Component } from "react";
import "./TodoItem.css";
class TodoItem extends Component {
  render() {
    let { items, deleteItem, makeItDone } = this.props;
    let doneStyle = `item d-flex  justify-content-between rounded bg-secondary text-white`;
    let notDoneStyle = `item d-flex  justify-content-between rounded`;
    let x = <i className="fas fa-check"></i>;
    return (
      <div>
        <h1 className="pt-2 text-center">TODO LIST</h1>
        <ul className="list-unstyled items pt-4 px-4 mb-0 pb-0">
          {items.map(function (item, index) {
            return (
              <li
                draggable="true"
                key={item.id}
                className={item.isDone ? doneStyle : notDoneStyle}
              >
                <span
                  className={`circle ${item.isDone ? "bg-done" : "bg-tommato"}`}
                  onClick={() => {
                    makeItDone(index);
                  }}
                >
                  {item.isDone ? x : ""}
                </span>
                <span
                  className="item-text"
                  style={
                    item.isDone
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                >
                  {item.item}
                </span>
                <span
                  className="icons pr-2 text-dark"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  <i
                    className={`fas fa-times-circle  ${
                      item.isDone ? "text-white" : "text-dark"
                    }`}
                  ></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoItem;
