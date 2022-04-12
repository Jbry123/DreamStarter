import { useMoralisWeb3Api } from "react-moralis";
import React from "react";
import { useState } from "react";
import { useMoralis} from "react-moralis";




        

const DMRBalance = () => {
        
            
        
            const Balance = () => {
              const { authenticate, isAuthenticated, logout } = useMoralis();
              if (!isAuthenticated) {
                setTimeout(function () {
                    if (isAuthenticated) {
                      return;
                  }
                }, 2000)
              }
                const Web3Api = useMoralisWeb3Api()
                console.log('DOM fully loaded and parsed');
        const options = { chain: "matic" };
        const GetBalance = Web3Api.account.getTokenBalances(options);
        let balances = [];
        const [balanceERC20, setbalanceERC20] = useState(balances)
        const handleClick = () => {
          console.log(Web3Api.account, "current user")
          setbalanceERC20(balances)
            // console.log(RDBObject,'handle');
            let RDBHTML = `<div className="balanceContainer" style="display: flex; flex-wrap: wrap; justify-content: center; margin-top: 20px;"><h2 style="font-family: Roboto; font-size: 35px; color: white;">`+ balances.toLocaleString("en-US") +` DMR</h2></div>`;
              document.getElementById("dmrBalance").innerHTML = RDBHTML;
              console.log(balances, 'added1');

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

        let alreadyRendered = false;
        
         if (alreadyRendered) {
          return;
         }
        GetBalance.then(
            value => {
              
              
              let result = value.filter(token => token.token_address == "0x955ce23f20217a6aa205620b40ede4c9e83d325f");
              balances = Math.round(result[0].balance / 1000000000000000000);
                // for (let i = 0; i < value.result.length; i++) {
                //     balances.push(JSON.parse(value.result[i].metadata));

                //     console.log(balances, 'added1');
                //   }
            // fulfillment
            alreadyRendered = true;
            }, reason => {
                console.log(reason, 'error reason');
            // rejection
            }).finally( () => {
              setbalanceERC20(balances)
              alreadyRendered = true;
              if (balances >= 250000) {
                document.getElementById('Tier5').setAttribute('stroke','#60AAC8');
                document.getElementById('Tier5').setAttribute('fill','#181818');
                document.getElementById('Tier5').setAttribute('filter','drop-shadow(0px 0px 20px #60AAC8)');
                if (isAuthenticated){
                  document.getElementById('tierHeaderText').innerText = "TIER 5";
                }
                
                return;
                }
              if (balances >= 100000) {
                document.getElementById('Tier4').setAttribute('stroke','#D6B660');
                document.getElementById('Tier4').setAttribute('fill','#181818');
                document.getElementById('Tier4').setAttribute('filter','drop-shadow(0px 0px 20px #D6B660)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 4";
                }
                return;
                }
              if (balances >= 50000) {
                document.getElementById('Tier3').setAttribute('stroke','#D11032');
                document.getElementById('Tier3').setAttribute('fill','#181818');
                document.getElementById('Tier3').setAttribute('filter','drop-shadow(0px 0px 20px #D11032)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 3";
                }
                return;
                }
              if (balances >= 25000) {
                document.getElementById('Tier2').setAttribute('stroke','#372FD3');
                document.getElementById('Tier2').setAttribute('fill','#181818');
                document.getElementById('Tier2').setAttribute('filter','drop-shadow(0px 0px 20px #372FD3)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 2";
                }
                return;
                }
                if (balances >= 1000) {
                document.getElementById('Tier1').setAttribute('stroke','#46A4DE');
                document.getElementById('Tier1').setAttribute('fill','#181818');
                document.getElementById('Tier1').setAttribute('filter','drop-shadow(0px 0px 20px #46A4DE)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 1";
                }
              return;
              }

              return;
                
            });    
                return (
                  <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <button style={{marginTop: "2%",width: "150px", borderColor: "rgb(105, 196, 166)", borderRadius: "0.5rem", fontSize: "17px", padding: "5px", fontWeight: "500", color: "#181818", background: "rgb(105, 196, 166)"}} onClick={handleClick}>Get balance! </button>
                    </div>

                    <div>
                      <h2 style={{color: "white", marginTop: "2%", marginLeft: "12px", textAlign: "center"}}> Your DMR Balance:</h2>
                    </div>
                    <div id="dmrBalance">
                    <p style={{color: "white", marginTop: "2%", marginLeft: "12px", textAlign: "center", fontSize: "30px", fontFamily: "Roboto"}}>XX,XXX DMR</p>
                    </div>
                  </div>
                )
              }
    
              
  return( 
      
    <div class="" id="">
    <Balance />
    <div >

    </div>
  </div>
  );
};


export default DMRBalance;