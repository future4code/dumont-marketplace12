import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import '../styles/home.css'

const Body = styled.div`
  display: flex;
  flex-direction: row;
`

const VendasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-width: 35%;
  
  margin: 50px 16px;

    h1 {
        color: #F04E3E;
    }

  input {
      margin-bottom: 6px;
      border-radius: 10px;
      border: 2px solid #43434F;
      padding: 10px;
      padding-left: 10px;


  color: #43434F;
height: 40px;
outline: none;
  }  

  input:hover{

	background: #eef4f4;
	transition: ease-in-out 0.3s;
	border: 1px solid #43434F;
}
  }

  select {
      margin-bottom: 5px;
      border-radius: 10px;
      border: 1px solid black;
      padding: 3px;
      padding-left: 10px;
     
      color: #43434F;
height: 40px;
outline: none;
  }

  button {
      border-radius: 10px;
      border: 1px solid black;
      margin-top: 20px;
      padding: 5px;
      background-color: #F04E3E;
      color: white;
      outline: none;
      border: none;
      height: 40px;
      border-radius: 20px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  button:hover{
    background-color: #ffff;
    color: #F04E3E;
    cursor: pointer;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
	transition: ease-in-out 0.2s;
  }
  `

 


const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 35%;

  margin: 50px 16px;

  h1 {
    color: #F04E3E;
  }

  img {
    max-height: 75%;
  }

  p {
    margin-top: -3px;
    
  }
`

class Vendas extends React.Component {

    state = {
        name: '',
        description: '',
        paymentMethod: '',
        category: '',
        price: '',
        photos: '',
    }

    handleNameChange = event => {
        const newNameValue = event.target.value;
        this.setState({name: newNameValue});
    }

    handleDescriptionChange = event => {
      const newDescriptionValue = event.target.value;
      this.setState({description: newDescriptionValue})
    }

    handlePaymentMethodChange = event => {
      const newPaymentMethodValue = event.target.value;
      this.setState({paymentMethod: newPaymentMethodValue})
    }

    handleCategoryChange = event => {
      const newCategoryValue = event.target.value;
      this.setState({category: newCategoryValue})
    }

    handlePriceChange = event => {
        const newPriceValue = event.target.value;
        this.setState({price: newPriceValue});
    }

    handlePhotosChange = event => {
        const newPhotosValue = event.target.value;
        this.setState({photos: newPhotosValue});
    }

    handleInstallmentsChange = event => {
      const newInstallmentsValue = event.target.value;
      this.setState({installments: newInstallmentsValue})
    }

    createProduct = () => {
        const body = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,            
            paymentMethod: 'card',
            category: 'categoria 1',
            photos: [this.state.photos],
            installments: 1
            

        }
        axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products', body)
        .then(() => {
            alert('Produto anunciado com sucesso')
            this.setState({name: '',description: '', price: 0, playmentMethod: '', category: '', photos: [], installments: 1})
        })
        .catch( error => {
            alert('Erro ao anunciar');
            console.log(error)            
        })
    }
    
    
    render() {
        return (
            <Body>
              
                <VendasContainer>
                    <h1>Venda</h1>
                    <input type = 'text' 
                      placeholder = 'Nome do produto' 
                      value = {this.state.name} 
                      onChange = {this.handleNameChange}
                    />

                    <input type = 'text'
                      placeholder = 'Descrição do produto'
                      value = {this.state.description}
                      onChange = {this.handleDescriptionChange}
                    />
                    
                    <input type = 'number' 
                      placeholder = 'Preço' 
                      value = {this.state.price}
                      onChange = {this.handlePriceChange}
                    />


                    <input type = 'text' 
                      placeholder = 'Link da imagem' 
                      value = {this.state.photos}
                      onChange = {this.handlePhotosChange}
                    />

                    <input type = 'text'
                      placeholder = 'Categoria do produto'
                      value = {this.state.category}
                      onChange = {this.handleCategoryChange}
                    />

                    <input type = 'number'
                      placeholder = 'Quantidade de parcelas'
                      value = {this.state.installments}
                      onChange = {this.handleInstallmentsChange}
                    />

                    <select value = {this.state.paymentMethod} onChange = {this.handlePaymentMethodChange} >
                      <option selected disabled hidden>Método de pagamento</option>
                      <option>Dinheiro</option>
                      <option>Cartão</option>
                    </select>
                  
                    <button type = 'button' onClick = {this.createProduct}>Anunciar</button>
                
                </VendasContainer>

                <PreviewContainer>  
                  <h1>Preview</h1>   
                  <div className="product">
            <img src={this.state.photos} alt="Product" />
            <div className="product-info">
              <div className="product-text">
                <h3>{this.state.name}</h3>
                <p>{this.state.price}</p>
              </div>
              <div className="product-button">
                <button className="buyBtn">
                  Comprar
                </button>
              </div>
            </div>
          </div>      
              
                
                </PreviewContainer>
            </Body>
        );
    }
}

export default Vendas
