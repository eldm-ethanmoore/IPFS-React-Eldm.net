import React, { useEffect, useState, Suspense, lazy } from 'react';
import './App.css';
import Clock from './Clock';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {

  const RenderImg = React.lazy(() => import('./scripts/RenderImg'));

  function GetImages(props)
  {
    return(
      <>
        <Suspense fallback={<div className="loadingText">Loading...</div>}>
          <RenderImg image={props.obj} />
        </Suspense>
      </>
    );
  } 

return (
    <>
      <Helmet>
        <title>Eldm.net!</title>
        <meta name="description" content="Personal and Professional Website of Eldm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://gateway.pinata.cloud/ipfs/QmS5xkGUpDppC1DQbkw5t8qP7nzzwbKAmSbRRUDDVv3FKn?preview=1" />
        <meta
          name="twitter:title"
          content="Eldm.net"
        />
        <meta name="twitter:creator" content="@eldm2350" />
        <meta name="twitter:site" content="@eldm2350" />
        <meta
          name="twitter:description"
          content="Personal and Professional Website of Eldm"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eldm.net" />
        <meta
          property="og:title"
          content="Eldm.net"
        />
        <meta
          property="og:description"
          content="Personal and Professional Website of Eldm"
        />
        <meta
          property="og:image"
          content="https://gateway.pinata.cloud/ipfs/QmS5xkGUpDppC1DQbkw5t8qP7nzzwbKAmSbRRUDDVv3FKn?preview=1"
        />
      </Helmet>
      <div className="tip centerTip">
        Mouse Over For Keyboard Navigation!
        <div className="centerTipHidden">
        <span className="tipText">
          (Select (W a s d || H j k l))
          (GoTo (Enter)
        </span>
        </div>
      </div>
      <Clock /> 
      <div className='builtWith box'>
        <a href='https://fleek.co/' target='_blank' >Deployed With: {<GetImages obj={0} />}</a>
        <a href='https://ipfs.io/' target='_blank'>Hosted On: {<GetImages obj={1}/>} && {<GetImages obj={2}/>}</a>
        <a href='https://reactjs.org/' target='_blank'>Front-End: {<GetImages obj={3}/>}</a>
      </div>
    </>
  );
}
      
export default App;