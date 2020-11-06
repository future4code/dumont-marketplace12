import React from 'react'
import '../styles/pageProduct.css'

class PageProducts extends React.Component {
	state={
		pageProductInfo: this.props.pageProductInfo,
	}
	render(){
		
		return(
			<div className="pageProducts">
		<img src={this.state.pageProductInfo.photos[0]} alt="Imagem do Produto"/>
		<div className="productText">
		<h1>{this.state.pageProductInfo.name}</h1>
		<p>{this.state.pageProductInfo.price}</p>

		<button>Checkout</button>
		<p><strong>Descrição</strong></p>
		{this.state.pageProductInfo.description}
		</div>
	
			</div>
		)
	}
}

export default PageProducts