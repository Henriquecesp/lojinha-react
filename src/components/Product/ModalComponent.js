import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import {
  ButtonToCart,
  ButtonContinue
} from "../ButtonscartComponent";

export default class ModalComponent extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              return (
                <div id='ModalContainer' className='container'>
                  <div className='row'>
                    <div onClick={() => closeModal()} className='modal-product'>
                      <div
                        id='modal'
                        className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4'
                      >
                        <h3>Item adicionado ao carrinho!</h3>
                        <img
                          src={img}
                          className='img-nop img-fluid p-1'
                          alt='product img'
                        />
                        <h3>{title}</h3>
                        <h4 className='text-muted'>Preço : R$ {price}</h4>
                        <div className='d-flex flex-row justify-content-center'>
                          <ButtonContinue onClick={() => closeModal()} />
                          <ButtonToCart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}
