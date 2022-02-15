import React, { useEffect, useState, Suspense, lazy } from 'react';
import '../App.css';
export default function RenderImg(props){
    const [imgData, setImgData] = useState(
    [
      {
        "alt": "fleek logo",
        "id": "fleekInfo",
        "width": "75px",
        "height": "30px",
        "src": "https://gateway.pinata.cloud/ipfs/QmQJvTEiU2Dprt6Ktfpcv5dioPpDsHrudyLwKUFBV6EXgk?preview=1"
      },
      {
        "alt": "ipfs logo",
        "id": "ipfsInfo",
        "width": "33px",
        "height": "33px",
        "src": "https://gateway.pinata.cloud/ipfs/QmboP5xirL86WcQPbhAmtEYDmHwxxSzU6CxwG5Bumhy5NT?preview=1"
      },
      {
        "alt": "github logo",
        "id": "",
        "width": "30px",
        "height": "30px",
        "src": "https://gateway.pinata.cloud/ipfs/QmThiNKmY4ZEjguureCbM9pApK6VuXq9TqERpNuDeXWWVS?preview=1"
      },      
      {
        "alt": "react logo",
        "id": "reactInfo",
        "width": "30px",
        "height": "25px",
        "src": "https://gateway.pinata.cloud/ipfs/Qmajbzt8coDNxXKSZRX7oxcQZfsSEJVQHAZpu3sYKT1zKs?preview=1"
      }
    ]
  );
  
 return (
   <>
     <img alt={imgData[props.image].alt} id={imgData[props.image].id} width={imgData[props.image].width} height={imgData[props.image].height} src={imgData[props.image].src}/>
   </>
);
}