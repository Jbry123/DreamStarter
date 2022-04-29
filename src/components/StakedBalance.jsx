import { useMoralisWeb3Api } from "react-moralis";
import React from "react";
import { useState } from "react";
import { useMoralis} from "react-moralis";




        

const StakedBalance = () => {
        
            
        
            const NFTBalance = () => {
              const { authenticate, isAuthenticated, logout } = useMoralis();
              if (!isAuthenticated) {
                setTimeout(function () {
                }, 2000)
              }
              const ABI = [
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "name": "allowance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ];        
              const moralisAPI = useMoralis();
              const getnfts = moralisAPI;
              const userAddress = getnfts.user;
              console.log(userAddress);
              // userAddress.attributes.accounts[0]

              const handleClick2 = async () => {
                const GetStakedNFTs = getnfts.Moralis.Web3.executeFunction({
                  chain: "matic",
                  contractAddress: "0xB0b0b94DefD5d3a4898F01A6c773d75710c2537E",
                  functionName: "get",
                  abi: [{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"get","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}],
            params: { user: userAddress.attributes.accounts[0] }
              });

              

              GetStakedNFTs.then(
                value => {
                  let HTML = `<div className="cardContainer" style="display: flex; flex-wrap: wrap; justify-content: center;">`;
                //   if (value == 32) {
                //     console.log("hi");
                //     HTML = `<h2 style="font-size: 18px; font-family: Rubik; color: white; padding: 4% 2%; text-align: center; font-weight: 500;">NO NFTS FOUND</h2>`;
                //     document.getElementById("test").innerHTML = HTML;
                //     return;
                // }
                console.log(value, 'hi chris');
                  for (let i = 0; i < value.length; i++) {

                    HTML += `
                    <div className="card" style="background: rgb(49, 50, 51); font-family: Rubik; padding: .61%; margin: 1.5%; max-width: 285px; border: solid 2px rgb(105, 196, 166); transition: 0.3s; border-radius: 5px;">
                        <img className="cardImage" style="border-radius: 5px 5px 0 0;" src="https://dreamstarter.co/wp-content/uploads/2022/02/DreamStarter-1220-x-630.png" alt="Avatar" style="width:100%">
                        <div className="container">
                            <h4 style="font-size: 18px; font-family: Rubik; color: white; padding: 4% 2%; text-align: center; font-weight: 500;"><b>`+ `SaM Launch NFT ` + value[i] + `</b></h4>
                            <p style="font-size: 13.6px; font-family: Rubik; color: white; padding: 4% 2%; text-align: center; font-weight: 500;">Stake this nft by entering the token ID in the box to the right, then unstake 30 days later to claim your rewards!<br/>(Your NFT will be locked up for this period, no early withdrawals.</p>
                            <div className="buttonContainer" style="display: flex; flex-wrap: wrap; justify-content: center;">
                            
                            <a className="stakingButton2" style=" !important; width: 100%; font-size: 14px; font-family: Roboto; font-weight: 400;"}}>
                              <button id="stakingButton" disabled style=" !important; margin-top: 2%; width: 100%; border: none; background: linear-gradient(45deg, #2DECB6, #46A7DE); border-radius: 0.5rem; font-size: 17px; padding: 5px; font-weight: 400; color: white;"}}> *IN THE VAULT*</button>
                            </a>
                        </div>
                        </div>
                    </div>`
                    if (i == value.length) {
                      HTML += `</div>`;
                  }
                    document.getElementById("test").innerHTML = HTML;
                    console.log(HTML, 'added1');
                    
                }
                  console.log(value);
                },
                reason => {
                  console.log(reason, 'error reason');
              // rejection
                })
                .finally( () => {
                  
                }); 
              };
              

        

        
                return (
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <button style={{marginTop: "2%", width: "200px", borderColor: "rgb(105, 196, 166)", borderRadius: "0.5rem", fontSize: "17px", padding: "5px", fontWeight: "500", color: "#181818", background: "rgb(105, 196, 166)"}} onClick={handleClick2}>Get NFTs Staked! </button>
                    </div>
                )
              }
    
              
  return( 
      
    <div class="" id="" style={{width: "40%"}}>
    <NFTBalance />

  </div>
  );
};


export default StakedBalance;