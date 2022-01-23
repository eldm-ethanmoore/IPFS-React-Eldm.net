import React, { useEffect, useState } from 'react';
import './App.css';
import './css/Contact.css'
import Clock from './Clock';
import Helmet from 'react-helmet';

const Contact = () => {

   return (
     <>
      <Helmet>
        <title>Contact Me!</title>
        <meta name="description" content="Eldm's contact details." />
      </Helmet>
      <Clock />
      <div className="box" id="contactBox">
        <h1 id="at">@</h1>
        <ul id="list">
          <br></br>
          <br></br>
          <li>Github <button><a id="linkFont" href="https://github.com/eldm-ethanmoore"  target="_blank"> eldm-ethanmoore</a></button></li>
          <br></br>
          <li>Twitter<button><a id="linkFont" href="https://twitter.com/eldm2350" target="_blank">eldm2350</a></button></li>
          <br></br>
          <li>LinkedIn <button> <a id="linkFont" href="https://www.linkedin.com/in/ethan-moore-a7106121a/" target="_blank">Ethan Moore</a></button></li>
          <br></br>
          <li>Email <button><a id="linkFont" href="mailto: eldm2350@protonmail.com" target="_blank">Send me an email!</a></button></li>
          <br></br>
          <li>Website<button><a id="linkFont" href="http://eldm.net" target="_blank">eldm.net</a></button></li>
        </ul>
      </div>
     </>
   );
}
export default Contact;