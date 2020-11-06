import React from "react";
import logo from "../assets/logo.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import axios from "axios";
import { Button } from "@material-ui/core";

import "../styles/navbar.css";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products";

class NavBar extends React.Component {
  state = {
    cartItens: [],
    products: [],
  };

  componentDidMount() {
    axios.get(baseURL).then((response) => {
      this.setState({ products: response.data.products });
    });
  }


  render() {
    return (
      <div className="navBar" style={this.props.style}>
        <img onClick={this.props.onClickLogo} src={logo} alt="logo" />
        <input type="text" placeholder="Search" />

        <ul>
          <select  name="Categories" id="Categories">
            {this.state.products.map((product) => (
              <option key={product.id} value={product.category}>{product.category}</option>
            ))}
          </select>
          <li onClick={this.props.onClickRegister}> Cadastre-se</li>
          <li onClick={this.props.onClickRegister}> Login </li>
        </ul>
        <img
          className="cartIcon"
          src={shoppingCart}
          onClick={this.props.onClickCart}
          alt="Shopping Cart"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.onClickSell}
        >
          Vender
        </Button>
      </div>
    );
  }
}

export default NavBar;
