import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import './css/Intro.css'
import './css/Blog.css'
import Clock from './Clock';
import Helmet from 'react-helmet';
function Blog() {
  const [newsData, setNewsData] = useState(
    [
      {
        "title": "1_Welcome!",
        "CID": "QmanRiykAupP3g2ikFnyegJoSEC87idbJRVrBT27nJSHLN"
      }
    ]
  );
  const [papersData, setPapersData] = useState(
    [
      {
        "title": "Blockchain Scalability",
        "CID": "QmYEReCHymBdu6o5sjWjzPQEnsBGTi2vEyf8XzdknLD3FZ"
      },
      {
        "title": "Distributed File Systems and Their Big Data",
        "CID": "QmcRnBLzjXzK8QsskfjRAzVw8ZDaS4pujMuhF6Lz1Rj7Qb"       
      },
      {
        "title": "How does the U.S. Government use Big Data?",
        "CID": "Qmf4nyMpwJx4kwTFJzbwnY7xRHVuHotijQX8s1jy7szvdv"       
      },
      {
        "title": "Is Decentralized Finance the Future?",
        "CID": "QmZeEe4dQRg9Nr7UVedEP2ucfqLGB7g9bf8D5BQJPjVtvJ"       
      }
    ]
  );
  const [lecturesData, setLecturesData] = useState(
    [
      {
        "title": "My View of Big Data",
        "CID": "QmU6ktNcGaFZJFbTkHEU1XfPeDtkoB5Jx9xBWAVUhG8E32"
      }
    ]
  );
  const [selectedArticle, setSelectedArticle] = useState(newsData[0].CID);
  const handleClick = e =>
  {
    setSelectedArticle(e.target.value);
    console.log(e.target.value);
  };

  const NewsLinks = (props) => {
    return(
      <button className="linksNews" value={props.obj.CID} onClick={handleClick}>
        <span id="apos">'</span> 
          {props.obj.title}
        <span id="apos">'</span>,
      </button>
    );
  }
  const PapersLinks = (props) => {
    return(
      <button className="linksPapers" value={props.obj.CID} onClick={handleClick}>
        <span id="apos">'</span> 
          {props.obj.title}
        <span id="apos">'</span>,
      </button>
    );
  }
  const LecturesLinks = (props) => {
    return(
      <button className="linksLectures" value={props.obj.CID} onClick={handleClick}>
        <span id="apos">'</span> 
          {props.obj.title}
        <span id="apos">'</span>,
      </button>
    );
  }
   return (
     <Fragment>
      <Helmet>
        <title>Blog!</title>
        <meta name="description" content="Blog of Eldm" />
      </Helmet>
      <div className="menu">
        <Clock />
      </div>

      <div className="leftSpace">
      </div>

      <table className="table">
        <tbody>
        <tr>
          <td><span id="declaration">News</span> = [ {newsData.map(item => <NewsLinks obj={item} />)} <span id="aposLarger">…</span> ]</td>
        </tr>
        <tr>
          <td><span id="declaration">Papers</span> = [ {papersData.map(item => <PapersLinks obj={item} />)} <span id="aposLarger">&emsp; &emsp; …</span>  ]</td>
        </tr>
        <tr>
          <td><span id="declaration">Lectures</span> = [ {lecturesData.map(item => <LecturesLinks obj={item} />)} <span id="aposLarger">…</span> ]</td>
        </tr>
        </tbody>
      </table>

      <div className="spacer">
       <iframe className="iframeBlog" id="post" src={`https://gateway.pinata.cloud/ipfs/${selectedArticle}?preview=1`}> </iframe> 
      </div>
     </Fragment>
   );
}
export default Blog;