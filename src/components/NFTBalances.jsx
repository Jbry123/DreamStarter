import { useMoralisWeb3Api } from "react-moralis";
import React from "react";
import { useState } from "react";





        

const NFTBalances = () => {
        
            
        
            const RDBNFTs = () => {
                const Web3Api = useMoralisWeb3Api()
                console.log('DOM fully loaded and parsed');
        
        const options = { chain: "eth", address: "0xF01b4F7153689Ec2f53A48818eDA8f740A6f41B3", token_address: "0x20bcde673cc3e77d843d100ea14e3760f64e1e11" };
        const GetNFTS = Web3Api.account.getNFTsForContract(options);
        let RDBObjectsFromOwner = [];
        const [RDBObject, setRDBObject] = useState(RDBObjectsFromOwner)
        const handleClick = () => {
            setRDBObject(RDBObjectsFromOwner)
            console.log(RDBObject,'handle');
            let RDBHTML = `<div className="cardContainer" style="display: flex; flex-wrap: wrap; justify-content: center;">`;

            for (let i = 0; i < RDBObject.length; i++) {

                RDBHTML += `
                <div className="card" style="background: rgb(49, 50, 51); font-family: Rubik; padding: .61%; margin: 1.5%; max-width: 250px; box-shadow: 0 4px 8px 10px rgba(105, 196, 166, 0.5); transition: 0.3s; border-radius: 5px;">
                    <img className="cardImage" style="border-radius: 5px 5px 0 0;" src="` +RDBObject[i].image.replace('ipfs://', 'https://ipfs.io/ipfs/')+`" alt="Avatar" style="width:100%">
                    <div className="container">
                        <h4 style="font-size: 20px; font-family: Rubik; font-weight: 400; color: white; padding: 4% 2%; text-align: center;"><b>`+ RDBObject[i].name +`</b></h4>
                        <div className="buttonContainer" style="display: flex; flex-wrap: wrap;">
                            <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
                                <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
                                Info
                                </button>
                            </a>
                            <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
                                <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
                                Stake Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>`
                if (i == RDBObject.length) {
                    RDBHTML += `</div>`
                    
                }
                document.getElementById("test").innerHTML = RDBHTML;
                console.log(RDBHTML, 'added1');
              }


            // document.getElementById("test").innerHTML = 
            // `
            // <div className="cardContainer" style="display: flex; flex-wrap: wrap; justify-content: center;">
            
            // <div className="card" style="background: rgb(49, 50, 51); font-family: Rubik; padding: .61%; margin: 1.5%; max-width: 250px; box-shadow: 0 4px 8px 10px rgba(105, 196, 166, 0.5); transition: 0.3s; border-radius: 5px;">
            //     <img className="cardImage" style="border-radius: 5px 5px 0 0;" src="` +RDBObject[1].image.replace('ipfs://', 'https://ipfs.io/ipfs/')+`" alt="Avatar" style="width:100%">
            //     <div className="container">
            //         <h4 style="font-size: 20px; font-family: Rubik; font-weight: 400; color: white; padding: 4% 2%; text-align: center;"><b>`+ RDBObject[1].name +`</b></h4>
            //         <div className="buttonContainer" style="display: flex; flex-wrap: wrap;">
            //             <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 Info
            //                 </button>
            //             </a>
            //             <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 Stake Now
            //                 </button>
            //             </a>
            //         </div>
            //     </div>
            // </div>

            // <div className="card" style="background: rgb(49, 50, 51); font-family: Rubik; padding: .61%; margin: 1.5%; max-width: 250px; box-shadow: 0 4px 8px 10px rgba(105, 196, 166, 0.5); transition: 0.3s; border-radius: 5px;">
            //     <img className="cardImage" style="border-radius: 5px 5px 0 0;" src="` +RDBObject[1].image.replace('ipfs://', 'https://ipfs.io/ipfs/')+`" alt="Avatar" style="width:100%">
            //     <div className="container">
            //         <h4 style="font-size: 20px; font-family: Rubik; font-weight: 400; color: white; padding: 4% 2%; text-align: center;"><b>`+ RDBObject[1].name +`</b></h4>
            //         <div className="buttonContainer" style="display: flex; flex-wrap: wrap;">
            //             <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 Info
            //                 </button>
            //             </a>
            //             <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 Stake Now
            //                 </button>
            //             </a>
            //         </div>
            //     </div>
            // </div>

            // <div className="card" style="background: rgb(49, 50, 51); font-family: Rubik; padding: .61%; margin: 1.5%; max-width: 250px; box-shadow: 0 4px 8px 10px rgba(105, 196, 166, 0.5); transition: 0.3s; border-radius: 5px;">
            //     <img className="cardImage" style="border-radius: 5px 5px 0 0;" src="` +RDBObject[1].image.replace('ipfs://', 'https://ipfs.io/ipfs/')+`" alt="Avatar" style="width:100%">
            //     <div className="container">
            //         <h4 style="font-size: 20px; font-family: Rubik; font-weight: 400; color: white; padding: 4% 2%; text-align: center;"><b>`+ RDBObject[1].name +`</b></h4>
            //         <div className="buttonContainer" style="display: flex; flex-wrap: wrap;">
            //             <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 Info
            //                 </button>
            //             </a>
            //             <a className="stakingButton" style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 <button style="font-size: 14px; font-family: Rubik; font-weight: 400;">
            //                 Stake Now
            //                 </button>
            //             </a>
            //         </div>
            //     </div>
            // </div>

            // </div>

            // `;
        }
        
        GetNFTS.then(
            value => {

                for (let i = 0; i < value.result.length; i++) {
                    RDBObjectsFromOwner.push(JSON.parse(value.result[i].metadata));

                    console.log(RDBObjectsFromOwner, 'added1');
                  }
            // fulfillment
            }, reason => {
                console.log(reason, 'error reason');
            // rejection
            }).finally( () => {
                setRDBObject(RDBObjectsFromOwner)
                console.log(RDBObject,'test1')
                return(RDBObjectsFromOwner);
                
            });    
              console.log(RDBObject.length, "rdb");
              setTimeout(() => {
                  
              }, 1000);
                return (
                  <div>
                    <div>
                      <button onClick={handleClick}>Get older! </button>
                    </div>
                  </div>
                )
              }
    
              
  return( 
      
    <div class="" id="">
    {/* <img src={RDBObjectsFromOwner} alt="Avatar" style={{width:"100%"}} />
    <div class="container">
      <h4><b>{RDBObjectsFromOwner}</b></h4>
      <p>{RDBObjectsFromOwner}</p>
    </div> */}
                <h2 style={{fontSize: "20px", fontFamily: "Roboto", fontWeight: "400", color: "white", padding: "4% 2%", textAlign: "center"}}>UPCOMING NFT VAULTS</h2>

    <RDBNFTs />
    <div id="test">

    </div>
  </div>
  );
};


export default NFTBalances;