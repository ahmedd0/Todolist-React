import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/Blog";
import err404 from "./components/Error404/err404";
class App extends Component {
  state = {
    products: [
      { name: "mobile", price: 40 },
      { name: "tv", price: 30 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route path="/err404" component={err404}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/Blog" component={Blog}></Route>
          <Route path="/" exact component={Home}></Route>

          <Redirect to="/err404"></Redirect>
        </Switch>
        {/* <div className="container app">
          <ul className="list-unstyled pt-5">
          {this.state.products.map((product) => (
            <Product product={product} key={product.name}></Product>
          ))}

          </ul>
        </div> */}
      </React.Fragment>
    );
  }
}

export default App;
