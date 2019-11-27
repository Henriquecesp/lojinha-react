import React, { Component } from "react";
import TopnavComponent from "../components/TopnavComponent";
import Error from "../components/Error/Error";
import FooterComponent from "../components/FooterComponent";

export default class Default extends Component {
  render() {
    return (
      <div>
        <TopnavComponent />
        <section className='svg-error'>
          <Error />
        </section>
        <FooterComponent />
      </div>
    );
  }
}
