import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { NavLink } from "react-router-dom";

class ButtonToCart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            console.log(value.detailProduct);
            const { inCart } = value.detailProduct;

            return (
              <div>
                <NavLink to='/Cart'>
                  <button
                    className='btn btn-success mx-1'
                  >
                    {inCart ? "No carrinho" : "Ir para o carrinho"}
                  </button>
                </NavLink>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

class ButtonContinue extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-outline-primary text-white text-uppercase mx-1 px-4'>
          <NavLink to='/Products'>Continue comprando</NavLink>
        </button>
      </div>
    );
  }
}

export { ButtonToCart, ButtonContinue };
