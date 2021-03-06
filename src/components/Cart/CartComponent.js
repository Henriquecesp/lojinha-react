import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class CartComponent extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <div className='pt-1'>
                    <Title name='Seu' title='Carrinho' />
                  </div>
                  <div
                    data-aos='fade-up'
                    data-aos-duration='3000'
                    className='cart-bg py-5 m-5'
                  >
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} history={this.props.history} />
                  </div>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
