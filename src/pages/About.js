import React from "react";
import TopnavComponent from "../components/TopnavComponent";
import AboutComponent from "../components/About/AboutComponent";
import Title from "../components/Title";

const About = () => (
  <div>
    <TopnavComponent />
    <div className='p-5'>
      <Title name='SOBRE' title='NÓS' />
      <AboutComponent />
    </div>
  </div>
);

export default About;
