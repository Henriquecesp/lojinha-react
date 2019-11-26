import TopnavComponent from "../components/TopnavComponent";
import React, { Component } from "react";
import Card from "../components/Product/Card";
import Title from "../components/Title";

export default class Products extends Component {
  render() {
    return (
      <React.Fragment>
        <TopnavComponent />
        <div className='p-1'>
          <Title name='Nova' title='Coleção' />
        </div>
        <Card />
      </React.Fragment>
    );
  }
}
