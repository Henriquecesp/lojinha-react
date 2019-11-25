// Importantando o React
import React from "react";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Default from "./pages/Default";
import Details from "./pages/Details";

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Products' component={Products}/>
        <Route path='/Cart' component={Cart}/>
        <Route path='/Details' component={Details}/>
        <Route path='/Default' component={Default}/>
      </Switch>
  </main>  
);

export default Main;