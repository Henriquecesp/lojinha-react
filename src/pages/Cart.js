import React, { Component } from 'react'
import TopnavComponent from '../components/TopnavComponent'
import CartComponent from '../components/Cart/CartComponent'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <TopnavComponent />
                <CartComponent />
            </div>
        )
    }
}
