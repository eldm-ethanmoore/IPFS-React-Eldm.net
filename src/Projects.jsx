import React, { useEffect, useState, Fragment } from 'react';
import './App.css';
import './css/Project.css'
import './css/Blog.css'
import Clock from './Clock';
import Helmet from 'react-helmet';
function Projects() {
  const [web3Data, setWeb3Data] = useState(
    [
      {
        "title": "Hosted on Pinata Ξ Rinkeby BuildSpace - DAO",
        "CID": "bafybeie336d3wufwc7lehuuvp3edld56k6wapblah3krhyf2jovw6dy4f4",
        "Learned": "QmSNYay2DMVMP97fMk3U2gkcdyW6FT8mLq8t5sj9BAHHac",
        "ButtonType": 1
      },
      {
        "title": "Hosted On Pinata Ξ Rinkeby BuildSpace - Turn-Based NFT browser game",
        "CID": "bafybeib22gfmbkro7jgf655mhkmdjmxiqtfhsc3swpxfieesyyyo4joqjy",
        "Learned": "QmPsYKMSmbczhesk6FkibB6oB18EPRT1vWEHDHMPNG8day",
        "ButtonType": 1
      },
      {
        "title": "◎ BuildSpace - NFT Collection on Sol",
        "CID": "https://github.com/eldm-ethanmoore/nft-drop-starter-project",
        "Learned": "QmcMqsNvpyAtHUhAyD4qF4xBRgrwgjm7J2i3Nibgi1BvyX",
        "ButtonType": 2
      },     
      {
        "title": "Ξ Rinkeby Blockchain Nanodegree Program - Flight Insurance",
        "CID": "https://github.com/eldm-ethanmoore/Decentralized-FlightSurety",
        "Learned": "QmZWKA7YQ6rcnKQTgZLbVLttmWQ8HVdsewB9893VVgRGJC",
        "ButtonType": 2
      },
      {
        "title": "Ξ Rinkeby Blockchain Nanodegree Program - Decentralized MarketPlace",
        "CID": "https://github.com/eldm-ethanmoore/Decentralized-MarketPlace",
        "Learned": "QmSk8CdyQ8L4RkBNHh1Ti3PxnLzNL4HHCrwzbD6UgMczmf",
        "ButtonType": 2
      },
      {
        "title": "Ξ Rinkeby Blockchain Nanodegree Program - Decentralized Supply chain",
        "CID": "https://github.com/eldm-ethanmoore/Decentralized-SupplyChain",
        "Learned": "QmZCxAra4u98xJrKm3U54ZdyHxFZ3vuoqXeWWYrJQKdKKe",
        "ButtonType": 2
      },
      {
        "title": "Ξ Rinkeby Blockchain Nanodegree Program - Star Notary",
        "CID": "https://github.com/eldm-ethanmoore/Decentralized-Star-Notary",
        "Learned": "QmatUUdCivSSwSPKkSRPEvai6RJmPiTuRJUGfzh6nGAqoF",
        "ButtonType": 2
      } 
    ]
  );
  const [universityData, setUniData] = useState(
    [
      {
        "title": " Process Comparison's between the Rasp Pi 3's GPU and CPU",
        "CID": "QmQyJbwcJLVR64B7W5ViCdG78kW5YKV79w92KMSNL5PTcQ",
        "Learned": "QmUH2SPtTPDBUjPbcBFfc6Sc5SLu3BBxCNx9mas481ozrU",
        "ButtonType": 0
      },
      {
        "title": "Contra Remake for Software Engineering",
        "CID": "QmWAaSrbo5dPbhcWuQmdGvcDvK2GKSVYQSRvXLHcNVbjuW",
        "Learned": "QmWV5D6fHQnYFa8Ck3EUNz1DVJ3NG6YRpW66ikj6thaoC7",
        "ButtonType": 0
      }
    ]
  );
  const [hobbyData, setHobbyData] = useState(
    [
      {
        "title": "ScriptsAndConfigs",
        "CID": "QmdFTek6Fm388suqoozHoyX3ZBvTu2cRMw5vaZe4sWgdh7",
        "Learned": "Qmex8RFZZZuMakJtdrJbBVdyWELL8C3prGLFaHs2ZnY9H3",
        "ButtonType": 0
      },
      {
        "title": "AutoCiv",
        "CID": "QmQe6imp26PTk8VmzagWXTfCJnXSuEEE2E4xUVAugejbCT",
        "Learned": "QmfNiz6P5npbxRkEGhChxdWKahq2GhexnFqeD1xingZySQ",
        "ButtonType": 0
      },
      {
        "title": "eldm.net!",
        "CID": "QmWYCXt59wUY1NtUeHd9a13Qy8jg1XQGi5WWJqes2jNB99",
        "Learned": "QmegvAU9pQvXp5GtizZWy2yLKeJirGM2Li1Ptd9gaTDB46",
        "ButtonType": 0
      }
    ]
  );
  const [selectedMenu, setSelectedMenu] = useState(hobbyData);
  const [learnedSelected, setLearnedSelected] = useState(hobbyData[2].Learned);
  const handleClick = e =>
  {
    if(e.target.value === 'web3Data')
    {
      setSelectedMenu(web3Data);
      setLearnedSelected(web3Data[0].Learned);
    }
    if(e.target.value === 'hobbyData')
    {
      setSelectedMenu(hobbyData);
      setLearnedSelected(hobbyData[2].Learned);
    }    
    if(e.target.value === 'universityData')
    {
      setSelectedMenu(universityData);
      setLearnedSelected(universityData[0].Learned);
    }
    console.log(e.target.value);
  };

  const handleClickLearned = e =>
  {
    setLearnedSelected(e.target.value);
    console.log(e.target.value);
  };

  const MenuItems = (props) => {
    if(props.value.ButtonType === 1)
    {
      return(
        <Fragment>
        <button className="itemBtn" value={props.value.Learned} onClick={handleClickLearned}>
          {props.value.title}
        </button>
        <button className="goToHost" >
        <a target="_blank" className="href" href={`https://${props.value.CID}.ipfs.dweb.link/?preview=1`}>
          href("{props.value.CID.substring(0,5)} <span className="ellipsis">…</span>");
        </a>
        </button>
        </Fragment>
      );
    } 
    if(props.value.ButtonType === 2){
       return(
        <Fragment>
        <button className="itemBtn" value={props.value.Learned} onClick={handleClickLearned}>
          {props.value.title}
        </button>
        <button className="goToHost" >
        <a target="_blank" className="href" href={props.value.CID}>
          Github("{props.value.CID.substring(35, 41)} <span className="ellipsis">…</span>");
        </a>
        </button>
        </Fragment>
      );     
    } else {
      return(
        <Fragment>
        <button className="itemBtn" value={props.value.Learned} onClick={handleClickLearned}>
          {props.value.title}
        </button>
        <button className="goToHost" >
        <a target="_blank" className="href" href={`https://gateway.pinata.cloud/ipfs/${props.value.CID}?preview=1`}>
          href("{props.value.CID.substring(0,5)} <span className="ellipsis">…</span>");
        </a>
        </button>
        </Fragment>
      );
    }
  }
   return (
     <Fragment>
      <Helmet>
        <title>My Projects!</title>
        <meta name="description" content="Personal and Professional Projects of Eldm" />
      </Helmet>
      <div className="menu">
        <Clock />

      <div className="leftSpace">
      </div>

      <div className="btnArea">
        <button onClick={handleClick} value={'web3Data'} className="web3Btn">
          <b>
          W<br></br>e<br></br>b<br></br>3
          </b>
        </button>        

        <button onClick={handleClick} value={'universityData'} className="uniBtn">
          <b>
          U<br></br>n<br></br>i<br></br>v<br></br>e<br></br>r<br></br>s<br></br>i<br></br>t<br></br>y
          </b>
        </button>

        <button onClick={handleClick} value={'hobbyData'} className="hobbyBtn">
          <b>
          H<br></br>o<br></br>b<br></br>b<br></br>y
          </b>
        </button>
      </div>
      </div>
      <div className="extMenu">
      <div className="menuItems">
        {selectedMenu.map(item => <MenuItems value={item} />)}
       <iframe className="iframe" src={`https://gateway.pinata.cloud/ipfs/${learnedSelected}?preview=1`}> </iframe>
      </div>
       </div>
     </Fragment>
   );
}
export default Projects;