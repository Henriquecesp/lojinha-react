import React, { Component } from "react";

export default class FeaturedComponent extends Component {
  render() {
    return (
      <div className='container featured'>
        <div className='row mx-5 py-5 justify-content-md-center'>
          <div className='col-xs-1 col-xl-6'>
            <img
              src='./img/featured.jpg'
              alt='featured img'
              className='img-fluid img-2'
            />
          </div>

          <div className='col-xs-1 col-xl-3'>
            <div className='details'>
              <div className='txt-1 text-item'>
                  <p className='text-white text-title'>Camisetas</p>
                  <hr className='footer-line' />
                  <p className='text-white'>Conforto & Estilo</p>
              </div>
              <img
                src='./img/product-1.jpg'
                alt='img product'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='col-xs-1 col-xl-3'>
            <div className='details'>
              <img
                src='./img/product-2.PNG'
                alt='img product'
                className='img-fluid'
              />
              <div className='txt-1 text-item'>
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
