import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default class FooterComponent extends Component {
  render() {
    return (
      <div className='container-fluid footer mt-5'>
        <div className='row ml-5 pt-4 justify-content-md-center'>
          <div className='col-xs-1 col-lg-5 col-xl-6'>
            <p className='text-white text-uppercase text-footer'>CONTATO</p>
            <p className='text-white'>
              Lojinha uniamerica se encontra na sala 404.
            </p>
          </div>
          <div className='col-xs-1 col-xl-3'>
            <p className='text-white text-uppercase'>menu</p>
            <NavLink to='/Products'>
              <p>Produtos</p>
            </NavLink>
            <NavLink to='/About'>
              <p>Sobre</p>
            </NavLink>
            <NavLink to='/Cart'>
              <p>Carrinho</p>
            </NavLink>
          </div>
          <div className='col-xs-1 col-xl-3'>
            <p className='text-white text-uppercase text-footer'>
              INSCREVA-SE para receber promocoes
            </p>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Seu email'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
              <InputGroup.Append>
                <Button variant='success'>Inscrever</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <hr className='footer-line' />
        <div className='text-center text-white py-3'>
          <span>
            Site feito por Henrique, Elison & Mauricio. Visite ES, sala 404
          </span>
        </div>
      </div>
    );
  }
}
