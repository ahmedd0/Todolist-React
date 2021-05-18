import React, { Component } from "react";
class Product extends Component {
  getClasses() {
    return this.state.count === 0
      ? "product-name text-white py-2 text-center bg-dark"
      : "product-name text-white py-2 text-center bg-primary";
  }

  render() {
    console.log(this.props);

    return (
      <li className="text-white">
        {this.props.product.name} : {this.props.product.price}
      </li>
    );
  }
}

export default Product;
