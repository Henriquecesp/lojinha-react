// Importantando o React
import React from "react";
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Switch, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
      </Switch>
  </main>  
);

export default Main;