import React, { Component } from "react";

export default class FeaturedComponent extends Component {
  render() {
    return (
      <div
        data-aos='fade-up'
        data-aos-duration='2000'
        className='container-fluid featured'
      >
        <div className='row mx-5 py-5 justify-content-md-center'>
          <div
            data-aos='fade-right'
            data-aos-duration='3000'
            className='col-xs-1 col-xl-6'
          >
              <img
                src='./img/featured.jpg'
                alt='featured img'
                className='img-fluid'
              />
          </div>

          <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='col-xs-1 col-xl-3'
          >
            <div className='details'>
              <div className='txt-1'>
                <p className='text-white text-title'>Camisetas</p>
                <hr className='footer-line' />
                <p className='text-white'>Conforto & Estilo</p>
              </div>
              <img
                src='./img/product-1.jpg'
                alt='img camiseta'
                className='img-fluid'
              />
            </div>
          </div>

          <div
            data-aos='fade-left'
            data-aos-duration='3000'
            className='col-xs-1 col-xl-3'
          >
            <div className='details'>
              <img
                src='./img/product-2.PNG'
                alt='img caneca'
                className='img-fluid'
              />
              <div className='txt-1'>
                <p className='text-white text-title'>Canecas</p>
                <hr className='footer-line' />
                <p className='text-white'>Personalidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
