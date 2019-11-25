import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const { id, title, model, img, price, inCart} = this.props.product;
        return (
            <div className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3">       
                <div className="card">
                    <div className="img-container" onClick={() => console.log('CLICOU NA IMAGEM')
                    }>
                        <NavLink to="/Details">
                            <img src={img} alt="product img" className="card-img-top"/>
                        </NavLink>
                    </div>    
                    {/* card footer */}
                    <div className="card-footer">
                        <p className='modelo mb-0 m-2'>
                            {model}
                        </p>
                        <p className='text-white mb-0 ml-2'>
                            {title}
                        </p>
                        <div className="flex">
                            <h5 className="mb-0 m-2">
                                <span>
                                    R$
                                </span>
                                {price}
                            </h5>
                            <button className="cart-btn" 
                            disabled={inCart ? true: false} 
                            onClick={() => {
                                console.log('added to cart');
                            }} 
                            >
                                {inCart ? (
                                    <p className="text-capitalize mb-0" disabled>
                                        {''}
                                        no carrinho
                                        </p>
                                        ) : (
                                        <span>add</span>
                                        )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
