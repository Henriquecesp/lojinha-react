import React from "react";
import { NavLink } from 'react-router-dom'

const TopnavComponent = () => (
  <div>
  <header className='topnav nav-colored'>
  <NavLink className='logo' to="/">LOJINHA UNIAMERICA</NavLink>
    <ul>
      <li><NavLink to='/Cart'>CARRINHO</NavLink></li>
      <li><NavLink to='/About'>SOBRE NÓS</NavLink></li>
      <li><NavLink to='/Products'>PRODUTOS</NavLink></li>
    </ul>
  </header>
  </div>
);

export default TopnavComponent;
