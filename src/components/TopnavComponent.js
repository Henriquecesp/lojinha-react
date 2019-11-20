/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { NavLink } from 'react-router-dom'

const TopnavComponent = () => (
  <header className='topnav'>
  <NavLink className='logo' to="/">LOJINHA UNIAMERICA</NavLink>
    <ul>
      <li><NavLink to='/About'>SOBRE NÓS</NavLink></li>
      <li><a href='/#'>PRODUTOS</a></li>
    </ul>
  </header>
);

export default TopnavComponent;
