import React, { Component } from "react";
import {
  Navbar,
  Nav,
  //NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class NewTopNavComponent extends Component {
  render() {
    return (
      <div className='text-topnav'>
        <Navbar className='bg-topnav' expand='lg' bg='light'>
          <NavLink to='/'>
            <Navbar.Brand className='logo'>Lojinha Uniamerica</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <div className='mx-lg-2'>
                <NavLink to='/Products'>Produtos</NavLink>
              </div>
              <div className='mx-lg-2'>
                <NavLink to='/About'>Sobre</NavLink>
              </div>
              <div className='mx-lg-2'>
                <NavLink to='/Cart'><FontAwesomeIcon icon={faShoppingCart}/></NavLink>
              </div>

              {/*
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
                */}
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Buscar'
                className='mr-sm-2'
              />
              <Button variant='success'><FontAwesomeIcon icon={faSearch}/></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
