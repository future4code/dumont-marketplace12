import React from "react";
import logo from "../assets/logo.svg";
import axios from "axios";
import { Button } from "@material-ui/core";

import "../styles/navbar.css";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products";

class ShoppingCart extends React.Component {
  state = {
    cartItens: [],
    products: [],
  };

render(){
  const cartList = this.props.cartProds.map(
    (prod, key) => {
      <li key={key}>
            <Button onClick={this.onClickDel(prod.id)}>Remove</Button>
            </li>
    }
  )
  return(
    {
      cartList
    }
   )
}
}

export default ShoppingCart;