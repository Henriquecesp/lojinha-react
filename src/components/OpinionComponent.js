import React, { Component } from "react";
import Title from "./Title";

export default class OpinionComponent extends Component {
  render() {
    let fontsize = {
      fontSize: "2rem"
    };
    let user = {
      name: "joao da costa",
      opinion: "Site muito bom, nota 10 recomendo!"
    };
    console.log(user);
    return (
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className='container-fluid opinion my-5 pt-1'
      >
        <Title name='usuarios' title='aprovam' />
        <div className='row text-center justify-content-center'>
          <div className='col-10 py-5'>
            <span
              className='text-center text-capitalize text-black'
              style={fontsize}
            >
              {user.name}
            </span>
            <br />
            <span className='text-center'>"{user.opinion}"</span>
          </div>
        </div>
      </div>
    );
  }
}
