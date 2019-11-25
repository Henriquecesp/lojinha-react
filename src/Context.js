import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
//Provider - information
//Consumer - use information

class ProductProvider extends Component {
    state ={
        products:[],
        detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState ( () =>{
            return {products:tempProducts}
        });
    }
    handleDetail = () =>{
        console.log('DETAIL')
    }
    addToCart = () =>{
        console.log('CART')
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer

export {ProductProvider,ProductConsumer}