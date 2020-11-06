import React from "react";
import NavBar from "./Components/NavBar";
import axios from "axios";
import "./styles/styles.css";
import "./styles/home.css";
import banner from "./assets/banner.png";

import Sell from "./Components/Sell";
import UserRegister from "./Components/UserRegister";
import PageProduct from "./Components/PageProduct";
const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products";

class App extends React.Component {
  state = {
    products: [],
    home: true,
    pageSell: false,
    pageRegister: false,
    pageCart: false,
    pageProd: false,
    cartProds: [],
    pageProductInfo: "",
  };

  componentDidMount() {
    this.renderProducts();
  }

  renderProducts = () => {
    axios
      .get(baseURL)
      .then((response) => this.setState({ products: response.data.products }));
  };

  onClickHome = () => {
    this.setState({
      home: true,
      pageProd: false,
      pageCart: false,
      pageSell: false,
      pageRegister: false,
    });
  };

  onClickSell = () => {
    this.setState({
      home: false,
      pageProd: false,
      pageCart: false,
      pageSell: true,
      pageRegister: false,
    });
  };
  onClickRegister = () => {
    this.setState({
      home: false,
      pageProd: false,
      pageCart: false,
      pageSell: false,
      pageRegister: true,
    });
  };
  onClickCart = () => {
    this.setState({
      home: false,
      pageProd: false,
      pageCart: true,
      pageSell: false,
      pageRegister: false,
    });
  };

  onClickBuy = (id) => {
    this.setState({
      pageProd: true,
    });

    let prodCart = [...this.state.cartProds];
    const product = this.state.products.filter((prod) => prod.id === id);
    prodCart.push(product[0]);
    this.setState({
      cartProds: prodCart,
      pageProductInfo: product[0],
    });
  };

  render() {


    const pageRender = () => {
      if (this.state.home) {
        return this.state.products.map((prod) => (
          <div className="product" key={prod.id}>
            <img src={prod.photos[0]} alt="Product" />
            <div className="product-info">
              <div className="product-text">
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
              </div>
              <div className="product-button">
                <button
                  className="buyBtn"
                  onClick={() => this.onClickBuy(prod.id)}
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ));
      } else if (this.state.pageProd) {
        return <PageProduct pageProductInfo={this.state.pageProductInfo} />;
      } else if (this.state.pageCart) {
        return "cart";
      } else if (this.state.pageRegister) {
        return <UserRegister onClickLogo={this.onClickHome} />;
      } else if (this.state.pageSell) {
        return <Sell />;
      }
    };

    return (
      <div className="App">
        <NavBar
          style={{ display: this.state.pageRegister ? "none" : "flex" }}
          onClickLogo={this.onClickHome}
          onClickSell={this.onClickSell}
          onClickCart={this.onClickCart}
          onClickRegister={this.onClickRegister}
        />
        <div
          className="home-banner"
          style={{ display: this.state.home ? "flex" : "none" }}
        >
          <img className="bannerImg" src={banner} alt="Banner" />
        </div>

        <div className="products-container">{pageRender()}</div>
   
      </div>
    );
  }
}

export default App;
