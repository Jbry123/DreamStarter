import { useMoralisWeb3Api } from "react-moralis";
import React from "react";
import { useState } from "react";





        

const DMRBalance = () => {
        
            
        
            const Balance = () => {
                const Web3Api = useMoralisWeb3Api()
                console.log('DOM fully loaded and parsed');
        const options = { chain: "matic", address: "0xF01b4F7153689Ec2f53A48818eDA8f740A6f41B3", to_block: "26720464" };
        const GetBalance = Web3Api.account.getTokenBalances(options);
        let balances = [];
        const [balanceERC20, setbalanceERC20] = useState(balances)
        const handleClick = () => {
          setbalanceERC20(balances)
            // console.log(RDBObject,'handle');
            let RDBHTML = `<div className="balanceContainer" style="display: flex; flex-wrap: wrap; justify-content: center;"><h2 style="font-family: Roboto; font-size: 35px; color: white;">`+ balances +`</h2></div>`;
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
        
        GetBalance.then(
            value => {
              
              
              let result = value.filter(token => token.token_address == "0x955ce23f20217a6aa205620b40ede4c9e83d325f");
              balances = Math.round(result[0].balance / 1000000000000000000)
                // for (let i = 0; i < value.result.length; i++) {
                //     balances.push(JSON.parse(value.result[i].metadata));

                //     console.log(balances, 'added1');
                //   }
            // fulfillment
            }, reason => {
                console.log(reason, 'error reason');
            // rejection
            }).finally( () => {
              setbalanceERC20(balances)
              return
                // console.log(RDBObject,'test1')
                // return(balances);
                
            });    
                return (
                  <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <button style={{marginTop: "2%",width: "150px", borderColor: "rgb(105, 196, 166)", borderRadius: "0.5rem", fontSize: "17px", padding: "5px", fontWeight: "400", color: "rgb(242, 242, 242)", background: "transparent"}} onClick={handleClick}>Get balance! </button>
                    </div>

                    <div>
                      <h2 style={{color: "white", marginTop: "2%", marginLeft: "12px", textAlign: "center"}}> Your DMR Balance:</h2>
                    </div>
                    <div id="dmrBalance">
                    {balances}
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