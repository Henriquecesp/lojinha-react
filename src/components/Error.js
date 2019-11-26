import React, { Component } from "react";
import ErrorComponent from "./ErrorComponent";
import { NavLink } from "react-router-dom";
import Title from '../components/Title'

export default class Error extends Component {
  render() {
    return (
      <div>
        <NavLink to='/'>
            <Title name='retornar para' title='Pagina principal' />
          <ErrorComponent />
        </NavLink>
      </div>
    );
  }
}
