import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import './css/Intro.css'
import Clock from './Clock';
import Helmet from 'react-helmet';
function Intro() {
   return (
     <Fragment>
      <Helmet>
        <title>Who am I?</title>
        <meta name="description" content="Hardcore Developer interested in web3 and creative potential" />
      </Helmet>
      <div className="menuBlogSpace">
      <Clock />
      </div>
      <div className="leftSpace">
      </div>
      <div className="spacerBlog">
            <p className="aboutMeText"> 
              <b>About Me</b>
            <br></br>
            <br></br>
              I am a computer science student currently attending Western Kentucky University. This is my portfolio website that contains all aspects of my academic and professional pursuits.
            <br></br>
            <br></br>
              I am proficient in Java and Python. I have experience in Bash, Ruby, C++/C#, Javascript, and Solidity. I also have experience in HTML, CSS, Markdown, and LATEX. I hope to learn Haskell and a Lisp dialect in the future.
            <br></br>
            <br></br>
              I am heavily interested in blockchain and smart contract development. I am also interested in furthering my knowledge of programming languages and designing programs with their different attributes in mind. I enjoy shell scripting and automating mundane routines ( Check out my ScriptAndConfigs github repo! ).
            <br></br>
            <br></br>
              My ambitions include keeping this website and my repositories up to date. Furthering my education to graduation. Specialize deeper into smart contracts, blockchain related technologies, and continue to learn more about general computer science concepts.
            </p>
      </div>
     </Fragment>
   );
}
export default Intro;