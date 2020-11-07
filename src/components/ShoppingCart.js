import React from "react";
import "../styles/cart.css";
import { Button } from "@material-ui/core";

import "../styles/navbar.css";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products";



class ShoppingCart extends React.Component {
  state = {
    cartItens: this.props.cartProds,
  };

  componentDidMount(){
   this.setState({cartItens: this.props.cartProds}) 
  }

  onClickDel = (name) => {
    const prodCart = [...this.state.cartItens];
    this.state.cartItens.filter((prod) => prod.name === name && prodCart.splice(prod, 1))
    console.log(prodCart);
  
    this.setState({
      cartItens: prodCart,
    });
    // console.log(this.state.cartItens)
  };

  render() {
    return (
      <>
        <div className="cart">
          {this.state.cartItens.map((prod) => (
            <div key={prod.name} className="productCart">
              <img src={prod.photos[0]} alt="Imagem do Produto" />
              <h3>{prod.name}</h3>
              <p>${prod.price}</p>
              <Button onClick={() => this.onClickDel(prod.name)}>Remove</Button>
            </div>
          ))}
        </div>

        <h3>
          Total:{" "}
        
        </h3>
      </>
    );
  }
}

export default ShoppingCart;
