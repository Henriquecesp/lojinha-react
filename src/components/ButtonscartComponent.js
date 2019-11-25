import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {NavLink} from 'react-router-dom'

class ButtonCart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        console.log(value.detailProduct);
                        const {id,inCart} = 
                        value.detailProduct;

                        return (
                            <div>
                            <button className="btn btn-success"
                                disabled={inCart?true:false}
                                onClick={()=>{
                                    value.addToCart(id)
                                    value.openModal(id)
                                }}
                                >
                                {inCart?'No carrinho' : 'Adicionar ao carrinho'}
                            </button>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}

class ButtonContinue extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-outline-info">
                    <NavLink to='/'>Continue comprando</NavLink>
                </button>
            </div>
        )
    }
}

export {ButtonCart, ButtonContinue}
