// Importantando o React
import React from "react";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Products' component={Products}/>
      </Switch>
  </main>  
);

export default Main;