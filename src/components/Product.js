import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProductConsumer } from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class Product extends Component {
    render() {
        const { id, title, model, img, price, inCart} = this.props.product;
        return (
            <div className="product-wrapper col-9 mx-auto col-md-6 col-lg-3 my-3">       
                <div className="card">
                    <ProductConsumer>
                        {value => (
                        <div>
                            <div className="img-container" 
                            onClick={() => 
                                value.handleDetail(id)
                            }>
                                <NavLink to="/Details">
                                    <img src={img} alt="product img" className="card-img-top"/>
                                </NavLink>
                            </div>   
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
                                    <button className="btn btn-success" 
                                    disabled={inCart ? true : false} 
                                    onClick={() => {
                                        value.addToCart(id)
                                        value.openModal(id)
                                    }} 
                                    >
                                        {inCart ? (
                                                <FontAwesomeIcon icon={faCartArrowDown} />
                                                ) : (
                                                <FontAwesomeIcon icon={faCartPlus} />
                                                )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        )}
                    </ProductConsumer>
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
