import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider} from "react-moralis";
import "./index.css";
import { MoralisDappProvider } from "./providers/MoralisDappProvider/MoralisDappProvider";
var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://unpkg.com/moralis/dist/moralis.js');
document.head.appendChild(jQueryScript);
var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://unpkg.com/moralis/dist/moralis.js');
document.head.appendChild(jQueryScript);

const mediaQuery = window.matchMedia('(max-width: 768px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
      // Then trigger an alert
      window.location = "https://liquidity.dreamstarter.co"
    }

/** Get your free Moralis Account https://moralis.io/ */


// const APP_ID = 'NnGgqIZm7ShVP8Z9r7dqUlv5is94EThKEji4hazo';
// const SERVER_URL = 'https://e9qwwhafj0c9.usemoralis.com:2053/server';


// function docReady(startFunction) {
//   // see if DOM is already available
//   if (document.readyState === "complete" || document.readyState === "interactive") {
//       // call on next available tick
//       setTimeout(startFunction, 1);
//   } else {
//       document.addEventListener("DOMContentLoaded", startFunction);
//   }
// }

// docReady( function(){
//   // Moralis.start({serverUrl, appId});  
//   const options = { chain: 'matic', address: '0xbDC91993Cc370eeD38e59cD1c68B6d2f88508Ce2' };
//   const polygonNFTs = Moralis.Web3API.account.getNFTs(options);
//   polygonNFTs.then(console.log( polygonNFTs.owner_of, 'nftTest'));
// });

  const appId = 'Kn9DxG4BFzFfmhSZWYYJqMXKTKnFlKADa0mPFp5s';
  const serverUrl = 'https://douakgit7wnc.usemoralis.com:2053/server';

  const APP_ID = 'Kn9DxG4BFzFfmhSZWYYJqMXKTKnFlKADa0mPFp5s';
  const SERVER_URL = 'https://douakgit7wnc.usemoralis.com:2053/server';

  // class Monster extends Moralis.Object {
  //   constructor() {
  //     // Pass the ClassName to the Moralis.Object constructor
  //     super('Monster');
  //     // All other initialization
  //     this.sound = 'Rawr';
  //   }
  
  //   hasSuperHumanStrength() {
  //     return this.get('strength') > 18;
  //   }
  
  //   static spawn(strength) {
  //     const monster = new Monster();
  //     monster.set('strength', strength);
  //     return monster;
  //   }
  // }

  // console.log(Monster, 'test');
  


  // Moralis.Object.registerSubclass('Monster', Monster);





const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false;
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <MoralisDappProvider>
          <App isServerInfo />
        </MoralisDappProvider>
      </MoralisProvider>
    );
};

ReactDOM.render(
  // <React.StrictMode>
  <Application />,
  // </React.StrictMode>,
  document.getElementById("root")
);
