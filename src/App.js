import React from "react";
import NavBar from "./components/NavBar";
import axios from "axios";
import "./styles/styles.css";
import "./styles/home.css";
import banner from "./assets/banner.png";
// import { Button } from "@material-ui/core";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products";

class App extends React.Component {
  state = {
    products: [],
    home: true,
    pageSell: false,
    pageRegister: false,
    pageCart: false,
    pageProduct: false,
    cartProds: [],
  };

  componentDidMount() {
    axios
      .get(baseURL)
      .then((response) => this.setState({ products: response.data.products }));
  }

  

  onClickBuy = (id)=> {
    const prodCart =[]
    this.state.products.map((prod) => prod.id === id && prodCart.push(prod));
    this.setState({ pageProduct: true, cartProds: [...this.state.cartProds, prodCart ]});
    // console.log(this.state.cartProds)
    
  }

  onClickHome = () => {
    this.setState({
      home: true,
      pageProduct: false,
      pageCart: false,
      pageSell: false,
      pageRegister: false,
    });
  }

  onClickSell = () => {
    this.setState({
      home: false,
      pageProduct: false,
      pageCart: false,
      pageSell: true,
      pageRegister: false,
    });
  }
  onClickRegister = () => {
    this.setState({
      home: false,
      pageProduct: false,
      pageCart: false,
      pageSell: false,
      pageRegister: true,
    });
  }
  onClickCart = () => {
    this.setState({
      home: false,
      pageProduct: false,
      pageCart: true,
      pageSell: false,
      pageRegister: false,
    });
  }

  render() {
    
    const pageRender = () => {
      if (this.state.home) {
        return this.state.products.map((prod) => (
          <div className="product">
            <img src={prod.photos[0]} alt="Product" />
            <div className="product-info">
              <div className="product-text">
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
              </div>
              <div className="product-button">
                <button className="buyBtn" onClick={() => this.onClickBuy(prod.id)}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ));
      } else if (this.state.pageProduct) {
        return "product";
      } else if (this.state.pageCart) {
        return "cart";
      } else if (this.state.pageRegister) {
        return "register";
      } else if (this.state.pageSell) {
        return "sell";
      }
    };

    
    return (
      <div className="App">
        <NavBar 
        onClickLogo={this.onClickHome}
         onClickSell={this.onClickSell} 
         onClickCart={this.onClickCart}
         onClickRegister={this.onClickRegister}
         
         />
         <div className="home-banner" style={{display: this.state.home ? 'flex' : 'none' }}>
          <img className="bannerImg" src={banner} alt="Banner" />
        </div>
      
        <div className="products-container">{pageRender()}</div>
      </div>
    );
  }
}

export default App;
