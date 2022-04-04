// import { useMoralisWeb3Api } from "react-moralis";
// import {useMoralisDapp} from "providers/MoralisDappProvider/MoralisDappProvider";
// import React from "react";

// const NFTs = () => {

//   const {RDBIDsFromOwner, RDBImageLinks, RDBMetadata, RDBNames, RDBsymbols } = useMoralisDapp();
// }

        
// class NFTBalances2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       RDBIDsFromOwner: RDBIDsFromOwner,
//       RDBImageLinks: RDBImageLinks,
//       RDBNames: [],
//       RDBsymbols: [],
//       RDBMetadata: []
//     };
//   }

//   // 

//   // getNFTBalances = () => {
//   //   const Web3Api = useMoralisWeb3Api()
//   //       console.log('DOM fully loaded and parsed');
        
//   //       const options = { chain: "matic", address: "0xF01b4F7153689Ec2f53A48818eDA8f740A6f41B3", token_address: "0xbdc91993cc370eed38e59cd1c68b6d2f88508ce2" };
//   //       const GetNFTS = Web3Api.account.getNFTsForContract(options);
  
//   //       GetNFTS.then(
//   //           value => {
  
//   //               for (let i = 0; i < value.result.length; i++) {
//   //                   this.state.RDBIDsFromOwner.push(value.result[i].token_id);
//   //                   this.state.RDBImageLinks.push(value.result[i].token_uri);
//   //                   this.state.RDBNames.push(value.result[i].name);
//   //                   this.state.RDBsymbol.push(value.result[i].symbol);
//   //                   this.state.RDBMetadata.push(value.result[i].metadata);
//   //                   if (i < 10) {console.log(this.state.RDBIDsFromOwner[i], 'added')};
//   //                 }
//   //                       // value.result[0].owner_of
//   //               console.log( 'value test');
                
//   //           // fulfillment
//   //           }, reason => {
//   //               console.log(reason, 'error reason');
//   //           // rejection
//   //           });
//   // }
  
//   render() {
//     return (
//       <div class="card">
//     <img src={RDBImageLinks[0]} alt="Avatar" style={{width:"100%"}} />
//     <div class="container">
//       <h4><b>{RDBNames[0]}</b></h4>
//       <p>{RDBIDsFromOwner[0]}</p>
//     </div>
//   </div>
//     );
//   }
// }

// export default NFTBalances2;