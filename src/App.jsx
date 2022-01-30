import React, { useEffect, useState, Fragment } from 'react';

import './App.css';
import Clock from './Clock';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
 
  return (
    <Fragment>
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
        <a href='https://fleek.co/' target='_blank' >Deployed With: <img alt="fleek logo" id='fleekInfo' width='75px' height='30px' src="https://gateway.pinata.cloud/ipfs/QmQJvTEiU2Dprt6Ktfpcv5dioPpDsHrudyLwKUFBV6EXgk?preview=1" /></a>
        <a href='https://ipfs.io/' target='_blank'>Hosted On: <img alt="ipfs logo" id='ipfsInfo' width='33px' height='33px' src='https://gateway.pinata.cloud/ipfs/QmboP5xirL86WcQPbhAmtEYDmHwxxSzU6CxwG5Bumhy5NT?preview=1' /> && <img alt="github logo" href='' width='30px' height='30px' src='https://gateway.pinata.cloud/ipfs/QmThiNKmY4ZEjguureCbM9pApK6VuXq9TqERpNuDeXWWVS?preview=1' /></a>
        <a href='https://reactjs.org/' target='_blank'>Front-End: <img alt="react logo" width='30px' height='25px' id='reactInfo' src='https://gateway.pinata.cloud/ipfs/Qmajbzt8coDNxXKSZRX7oxcQZfsSEJVQHAZpu3sYKT1zKs?preview=1'></img></a>
      </div>
    </Fragment>
  );
}

export default App;