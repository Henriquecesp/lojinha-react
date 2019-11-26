import React, { Component } from "react";

export default class AboutComponent extends Component {
  render() {
    return (
      <div  className='container-fluid p-5'>
        <div className='row justify-content-md-center'>
          <div data-aos="fade-right" data-aos-duration="3000" className='col-xs-6 col-lg-10 col-xl-7 mx-auto my-3 text-white'>
            <img
              className='img-fluid'
              src='img/img-about.png'
              alt='img about'
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className='col-xs-6 col-lg-10 col-xl-4 mx-auto text-white'>
            <h4 class='mt-5'>Lojinha Uniamerica</h4>
            <p class='mb-0'>
              O projeto lojinha Uniamerica, surge de um problema real enfrentado
              pelos alunos do curso de Engenharia de Software, tem como objetivo
              facilitar cursos a obterem sua identidade através de nossos
              produtos.
            </p>
            <form method='GET'>
              <p>
                Entre em contato com um dos alunos envolvidos no projeto para
                saber mais.
              </p>
              <button
                type='submit'
                class='mt-4 mb-5 btn btn-lg btn-success mx-auto'
              >
                Fale conosco!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
