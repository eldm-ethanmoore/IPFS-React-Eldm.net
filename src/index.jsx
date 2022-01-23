import React, { useState, useEffect } from 'react'
import useKeyboardShortcut from 'use-keyboard-shortcut';
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import App from './App'
import Blog from './Blog';
import Contact from './Contact';
import Projects from './Projects';
import Intro from './Intro';
import Error from './Error';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Helmet from 'react-helmet';
function KeyboardShortcuts() {

  useEffect(() => {
    changeSelector('pathInfo');
  }, [])
  
  const Navigate = useNavigate();
  const [lastKey, setLastKey] = useState('pathInfo');
  useKeyboardShortcut(['w'], () => changeSelector('IntroInfo'), { overrideSystem: false })
  useKeyboardShortcut(['k'], () => changeSelector('IntroInfo'), { overrideSystem: false })

  useKeyboardShortcut(['a'], () => changeSelector('ProjectsInfo'), { overrideSystem: false })
  useKeyboardShortcut(['h'], () => changeSelector('ProjectsInfo'), { overrideSystem: false })

  useKeyboardShortcut(['s'], () => changeSelector('ContactInfo'), { overrideSystem: false })
  useKeyboardShortcut(['j'], () => changeSelector('ContactInfo'), { overrideSystem: false })

  useKeyboardShortcut(['d'], () => changeSelector('BlogInfo'), { overrideSystem: false })
  useKeyboardShortcut(['l'], () => changeSelector('BlogInfo'), { overrideSystem: false })

  useKeyboardShortcut(['enter'], () => changeSelector('enter'), { overrideSystem: false })

  const changeSelector = async (key) => {
    switch (key) {
      case 'IntroInfo':
        removeSelector(lastKey)
        addSelector(key)
        setLastKey(key)
        break;
      case 'ProjectsInfo':
        removeSelector(lastKey)
        addSelector(key)
        setLastKey(key)
        break;
      case 'ContactInfo':
        removeSelector(lastKey)
        addSelector(key)
        setLastKey(key)
        break;
      case 'BlogInfo':
        removeSelector(lastKey)
        addSelector(key)
        setLastKey(key)
        break;
      case 'pathInfo':
        removeSelector(lastKey)
        addSelector(key)
        setLastKey(key)
        break;
      case 'enter':
        if(lastKey === 'pathInfo')
        {
          removeSelector(lastKey)
          addSelector('pathInfo')
          setLastKey('pathInfo')
          Navigate('/');
        } else {
          removeSelector(lastKey)
          addSelector('pathInfo')
          setLastKey('pathInfo')
          Navigate(lastKey.slice(0, lastKey.length - 4));
        }
        break;
    }
  }

  const removeSelector = async (lastKey) => {
    var appTxt = document.getElementById(lastKey);
    appTxt.style.background = '';
    appTxt.style.padding = '';
    appTxt.style.margin = '';
    appTxt.style.border = '';
    appTxt.style.borderStyle = '';
    appTxt.style.borderColor = '';
  }

  const addSelector = async (id) => {
    var appTxt = document.getElementById(id);
    appTxt.style.background = '#9AE19D';
    appTxt.style.padding = '2px';
    appTxt.style.margin = '3px';
    appTxt.style.border = '1px';
    appTxt.style.borderStyle = 'solid';
    appTxt.style.borderColor = 'black';
  }

  return addSelector, changeSelector, removeSelector;
}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <KeyboardShortcuts />
      <div className="box" id='mainNav'>
        <h1 id='title'>eldm.net <Link to='/' id='pathInfo' >/home</Link></h1>
        <Link to='Intro' id='IntroInfo'>Introduction</Link>
        <Link to='Contact' id='ContactInfo'>Contact Me</Link>
        <Link to='Projects' id='ProjectsInfo'>Projects</Link>
        <Link to='Blog' id='BlogInfo'>Blog</Link>
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

)
