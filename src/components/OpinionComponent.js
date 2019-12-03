import React, { Component } from "react";
import Title from "./Title";

export default class OpinionComponent extends Component {
  render() {
    let fontsize = {
      fontSize: "2rem"
    };
    let user = {
      name: "Stefan Kussakawa",
      opinion: "Site muito bom, nota 10, recomendo!"
    };
    console.log(user);
    return (
      <div
        data-aos='fade-down'
        data-aos-duration='2000'
        className='container-fluid opinion my-5 pt-1'
      >
        <Title name='usuários' title='aprovam' />
        <div className='row text-center justify-content-center'>
          <div className='col-10 py-5'>
          <span className='text-center' style={fontsize}>"{user.opinion}"</span>
            <br />
            <span
              className='text-center text-capitalize text-black'
            >
              {user.name}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
