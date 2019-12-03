import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Title from "../Title";

export default class FeaturedComponent extends Component {
  render() {
    return (
      <div>
        <Title name='Para' title='Você' />
        <div
          data-aos='fade-up'
          data-aos-duration='2000'
          className='container-fluid'
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
                className='img-fluid card'
              />
              <div className='inside-img'>
                <NavLink to='/Products'>
                  <p className='text-black text-uppercase'>
                    Conheça <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                </NavLink>
                <hr className='line' />
              </div>
            </div>

            <div
              data-aos='fade-up'
              data-aos-duration='3000'
              className='col-xs-1 col-xl-3'
            >
              <div className='card details'>
                <img
                  src='./img/product-1.jpg'
                  alt='camiseta'
                  className='card-img-top'
                />
                <div className='card-body featured'>
                  <p className='card-text text-center text-title text-white'>
                    CAMISETAS
                  </p>
                  <hr className='footer-line' />
                  <p className='text-white text-center'>Conforto & Estilo</p>
                </div>
              </div>
            </div>

            <div
              data-aos='fade-left'
              data-aos-duration='3000'
              className='col-xs-1 col-xl-3'
            >
              <div className='card details'>
                <div className='card-body  featured'>
                  <p className='card-text text-center text-title text-white'>
                    CANECAS
                  </p>
                  <hr className='footer-line' />
                  <p className='text-white text-center'>Personalidade</p>
                </div>
                <img
                  src='./img/product-2.PNG'
                  alt='camiseta'
                  className='card-img-bottom'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
