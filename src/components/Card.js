import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import Product from '../components/Product'

export default class Card extends Component {
    render() {
        return (
            <React.Fragment>
                    <div className="container">
                        <div data-aos='fade-up' data-aos-duration="3000" className="text-title">
                            <div className="row">
                                <ProductConsumer>
                                    {value=>{
                                        return value.products.map( product =>{
                                            return <Product key={product.id} product=
                                            {product} />
                                        })
                                    }}
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>    
            </React.Fragment>
        );
    }
}
