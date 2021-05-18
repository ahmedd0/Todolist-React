import React, { Component } from "react";
//-------------------------------------------------------------------

import TodoItem from "./../../components/TodoItem/TodoItem";
import AddItem from "./../../components/AddItem/AddItem";

//------------------------------------------------------------------

import "./home.css";

//------------------------------------------------------------------
class Home extends Component {
  state = {
    items: [],
    val: "",
    id: 0,
    isDone: false,
  };
  componentDidMount = () => {
    let items = this.state.items;
    let itemId = this.state.id;

    if (localStorage.getItem("todoItems") == null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("todoItems"));
      this.setState({ items });
    }
    //----------------------------------------------------------
    if (localStorage.getItem("itemId") == null) {
      itemId = 1;
      this.setState({ id: itemId });
    } else {
      itemId = JSON.parse(localStorage.getItem("itemId"));
      itemId++;
      this.setState({ id: itemId });
    }
  };
  deleteItem = (itemId) => {
    let items = this.state.items.filter((item) => {
      return item.id !== itemId;
    });

    //---------------------------------------------------
    this.setState({ items });
    localStorage.setItem("todoItems", JSON.stringify(items));
  };
  handleChange = (e) => {
    let val = this.state.val;
    let id = this.state.id;
    let isDone = this.state.isDone;
    val = e.target.value;
    this.setState({ val });

    if (e.keyCode === 13) {
      let items = this.state.items;
      this.setState({ id });
      localStorage.setItem("itemId", JSON.stringify(this.state.id));
      items.push({ id: id, item: val, isDone: isDone });
      localStorage.setItem("todoItems", JSON.stringify(this.state.items));
      id++;
      this.setState({ items, id: id });
      localStorage.setItem("itemId", JSON.stringify(this.state.id));

      e.target.value = "";
    }
  };
  MakeTaskDone = (itemId) => {
    let items = this.state.items;
    items[itemId].isDone = !items[itemId].isDone;
    this.setState({ items });
    localStorage.setItem("todoItems", JSON.stringify(this.state.items));
  };

  render() {
    return (
      <React.Fragment>
        <div id="home" className="compon home  pt-5 ">
          <div className="container d-flex justify-content-center align-items-start">
            <div className="todo  col-md-6 col-lg-8 col-xl-6 col-xxl-4 bg-white rounded">
              <TodoItem
                items={this.state.items}
                deleteItem={this.deleteItem}
                makeItDone={this.MakeTaskDone}
              ></TodoItem>
              <AddItem handleChange={this.handleChange} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
