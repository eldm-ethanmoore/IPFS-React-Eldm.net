import React from 'react'
import './css/Error.css';
import Helmet from 'react-helmet';

function Intro() {
   return (
     <>
      <Helmet>
        <title>404</title>
        <meta name="description" content="Sorry not found!" />
      </Helmet>
      <div id='Error'>
        <h1 id='titleOfErrorPage'>eldm.net  404 {location.pathname}</h1>
      </div>
     </> 
   );
}
export default Intro;