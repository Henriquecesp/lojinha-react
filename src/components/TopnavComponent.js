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
    <ul>
      <li><NavLink className='logo' to="/">LOJINHA UNIAMERICA</NavLink></li>
      <li><a className='others' href='/#'>PRODUTOS</a></li>
      <li><NavLink className='others' to='/About'>SOBRE NÓS</NavLink></li>
    </ul>
  </header>
);

export default TopnavComponent;
