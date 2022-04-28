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
                  contractAddress: "0x7B897D211Ed0be5B34Bb7B6008509b53bE423F8B",
                  functionName: "get",
                  abi: [{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],
            params: { user: userAddress.attributes.accounts[0] }
              });

              

              GetStakedNFTs.then(
                value => {
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
                      <button style={{marginTop: "2%",width: "150px", borderColor: "rgb(105, 196, 166)", borderRadius: "0.5rem", fontSize: "17px", padding: "5px", fontWeight: "500", color: "#181818", background: "rgb(105, 196, 166)"}} onClick={handleClick2}>Get balance! </button>
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