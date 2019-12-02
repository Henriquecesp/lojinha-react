import React, { Component } from "react";
import InputGroupComponent from "./InputGroupComponent";
import Title from "./Title";

export default class PromotionComponent extends Component {
  render() {
    return (
      <div>
        <Title name='promoção' title='especial' />
        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='container-fluid promotion mt-5'
        >
          <div className='row'>
            <div
              data-aos='fade-right'
              data-aos-duration='3000'
              className='mx-auto py-5 col-2 col-lg-4'
            >
              <h3 className='text-title text-white text-uppercase'>
                cadastre-se para receber lançamentos e ganhe descontos!
              </h3>
            </div>
            <div
              data-aos='fade-left'
              data-aos-duration='3000'
              className='m-auto col-4 py-5 justify-content-center'
            >
              <InputGroupComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
