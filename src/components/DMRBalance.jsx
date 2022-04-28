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
          setbalanceERC20(balances)
            // console.log(RDBObject,'handle');
            let RDBHTML = `<div className="balanceContainer" style="display: flex; flex-wrap: wrap; justify-content: center; margin-top: 20px;"><p style="font-family: Roboto; color: white;">`+ balances.toLocaleString("en-US") +` DMR</p></div>`;
              document.getElementById("dmrBalance").innerHTML = RDBHTML;
       
        }

        let alreadyRendered = false;
        
         if (alreadyRendered) {
          return;
         }
        GetBalance.then(
            value => {
              if (value.length == 0 ){
                return;
              }
              
              let result = value.filter(token => token.token_address == "0x955ce23f20217a6aa205620b40ede4c9e83d325f");
              balances = Math.round(result[0].balance / 1000000000000000000);
                // for (let i = 0; i < value.result.length; i++) { ------ FOR LATER WHEN WE HAVE MULTIPLE TOKEN BALANCES
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
                  document.getElementById('dmrBalanceText').innerText = balances.toLocaleString("en-US") + " DMR";
                }
                
                return;
                }
              if (balances >= 100000) {
                document.getElementById('Tier4').setAttribute('stroke','#D6B660');
                document.getElementById('Tier4').setAttribute('fill','#181818');
                document.getElementById('Tier4').setAttribute('filter','drop-shadow(0px 0px 20px #D6B660)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 4";
                document.getElementById('dmrBalanceText').innerText = balances.toLocaleString("en-US") + " DMR";
                }
                return;
                }
              if (balances >= 50000) {
                document.getElementById('Tier3').setAttribute('stroke','#D11032');
                document.getElementById('Tier3').setAttribute('fill','#181818');
                document.getElementById('Tier3').setAttribute('filter','drop-shadow(0px 0px 20px #D11032)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 3";
                document.getElementById('dmrBalanceText').innerText = balances.toLocaleString("en-US") + " DMR";
                }
                return;
                }
              if (balances >= 25000) {
                document.getElementById('Tier2').setAttribute('stroke','#372FD3');
                document.getElementById('Tier2').setAttribute('fill','#181818');
                document.getElementById('Tier2').setAttribute('filter','drop-shadow(0px 0px 20px #372FD3)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 2";
                document.getElementById('dmrBalanceText').innerText = balances.toLocaleString("en-US") + " DMR";
                }
                return;
                }
                if (balances >= 1000) {
                document.getElementById('Tier1').setAttribute('stroke','#46A4DE');
                document.getElementById('Tier1').setAttribute('fill','#181818');
                document.getElementById('Tier1').setAttribute('filter','drop-shadow(0px 0px 20px #46A4DE)');
                if (isAuthenticated){
                document.getElementById('tierHeaderText').innerText = "TIER 1";
                document.getElementById('dmrBalanceText').innerText = balances.toLocaleString("en-US") + " DMR";
                }
              return;
              }

              return;
                
            });    
                return (
                  <div>
                    {/* .s */}

                    <div>
                      <h2 style={{color: "white", marginTop: "2%", marginLeft: "12px", textAlign: "center"}}> Your DMR Balance:</h2>
                    </div>
                    <div id="dmrBalance">
                    <p id="dmrBalanceText" style={{border: "solid 3px #rgb(105, 196, 166)", borderRadius: "5px 25px 5px 20px", color: "white", marginTop: "2%", marginLeft: "12px", textAlign: "center", fontSize: "30px", fontFamily: "Roboto"}}>XX,XXX DMR</p>
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