import React, { Component } from "react";
import Title from "./Title";

export default class OpinionComponent extends Component {
  render() {
      let fontsize = {
          fontSize: '2rem'
      }
      let user = {
          name: 'joao da costa',
          opinion: 'Site muito bom, nota 10 recomendo!'
      }
    return (
      <div className='container-fluid opnion my-5'>
        <Title name='usuarios' title='aprovam' />
        <div className='row text-center justify-content-center'>
          <div className='col-10'>
            <span className='text-center text-capitalize text-black' style={fontsize}>{user.name}</span>
            <br/>
            <span className='text-center'>"{user.opinion}"</span>
          </div>
        </div>
      </div>
    );
  }
}
