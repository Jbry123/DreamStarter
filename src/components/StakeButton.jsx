import React, { useEffect, useState } from 'react';
import { useWeb3Transfer, useMoralis } from "react-moralis";



const StakeButton = () => {
    
    const StakeButton2 = () => {
        const { authenticate, isAuthenticated, logout } = useMoralis();
        const [tokenIdStaking, setTokenIdStaking] = useState();
        const moralisAPI = useMoralis();
        const stake = moralisAPI.Moralis.Web3;
        const ABI = [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_contract",
                        "type": "address"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    }
                ],
                "name": "approveAndTransfer",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_nftAddress",
                        "type": "address"
                    }
                ],
                "name": "setNFT",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "stake2",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "RewardsSent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Staked",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }
                ],
                "name": "unstake",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "Unstaked",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "_isApprovedOrOwner",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "DMRToken",
                "outputs": [
                    {
                        "internalType": "contract IERC20",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "lockupStartDate",
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
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "onERC721Received",
                "outputs": [
                    {
                        "internalType": "bytes4",
                        "name": "",
                        "type": "bytes4"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "parentNFT",
                "outputs": [
                    {
                        "internalType": "contract IERC721",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "stakers",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "unrealizedDMRBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastRewardPoints",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "rewardsEarned",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "rewardsReleased",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "tokenOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];



        document.addEventListener('keypress', logKey);

        function logKey() {
            setTokenIdStaking(document.getElementById('stakingInputField').value);
            return;
        }

        const transfer = useWeb3Transfer({
            type: "erc721",
            receiver: "0xB0b0b94DefD5d3a4898F01A6c773d75710c2537E", //staking contract
            contractAddress: "0x5C45512C39958c73bDdcdCC1179C049D0D079b73",//NFT contract
            tokenId: tokenIdStaking,
        });

        const sendOptions = {
            contractAddress: "0xB0b0b94DefD5d3a4898F01A6c773d75710c2537E",//staking contract
            functionName: "stake2",
            abi: ABI,
            params: {
                _tokenId: tokenIdStaking,
            },
        };
        // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"
        if (!isAuthenticated) {
            setTimeout(function () {
                if (isAuthenticated) {
                    return;
                }
            }, 2000);
        }
        // Wait until the transaction is confirmed
        


        const transferNFT = () => {

            console.log(transfer.tokenId, "transferStaking");
            transfer.tokenId = document.getElementById('stakingInputField').value;
            sendOptions.params._tokenId = document.getElementById('stakingInputField').value;
            console.log(transfer.tokenId, "transferStaking");
            stake.executeFunction(sendOptions).finally(setTimeout(function () {
                transfer.fetch();
                document.getElementById('stakeButton').className = 'strobe';
                setTimeout(function () {
                    document.getElementById('stakeButton').className = '';
                }, 20000);
            }, 13500));

            
            

        }
        return (
            <div id="vaultContainerSmall" style={{padding: "32px", borderRadius: "10px", minHeight: "620px"}}>

                <div>
                    <h2 style={{ color: "white", fontSize: "30px", textAlign: "center", minWidth: "300px"  }}>
                        1-MONTH VAULT
                    </h2>
                    <p style={{ color: "#2DECB6", fontSize: "20px", textAlign: "center", minWidth: "300px"  }}>
                        250K $DMR ⋍ $3000
                    </p>
                </div>

                <div id="vaultInfo" style={{background: "#f1f1f1", borderRadius: "10px"}}>

                    <div id="vaultTextContainer" style={{display: "flex", flexWrap: "wrap", width: "100%", minWidth: "300px" }}>
                        <div style={{width: "45%", margin: "2.5%"}}>
                            <p style={{ color: "#323232", fontSize: "14px", textAlign: "center", fontWeight: "500" }}>
                            START DATE
                            </p>
                            <p style={{ color: "#323232", fontSize: "17px", textAlign: "center", fontWeight: "500" }}>
                            04/27/22
                            </p>
                        </div>

                        <div style={{width: "45%", margin: "2.5%"}}>
                            <p style={{ color: "#323232", fontSize: "14px", textAlign: "center", fontWeight: "500" }}>
                            END DATE
                            </p>
                            <p style={{ color: "#323232", fontSize: "17px", textAlign: "center", fontWeight: "500" }}>
                            06/10/22
                            </p>
                        </div>
                    </div>
                    <div id="vaultTextContainer" style={{display: "flex", flexWrap: "wrap", width: "100%", minWidth: "300px" }}>
                        <div style={{width: "45%", margin: "2.5%"}}>
                            <p style={{ color: "#323232", fontSize: "14px", textAlign: "center", fontWeight: "500" }}>
                            APY
                            </p>
                            <p style={{ color: "#323232", fontSize: "17px", textAlign: "center", fontWeight: "500" }}>
                            1000% +
                            </p>
                        </div>

                        <div style={{width: "45%", margin: "2.5%"}}>
                            <p style={{ color: "#323232", fontSize: "14px", textAlign: "center", fontWeight: "500" }}>
                            EARN
                            </p>
                            <p style={{ color: "#323232", fontSize: "17px", textAlign: "center", fontWeight: "500" }}>
                            $DMR
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                <h2 style={{ color: "white", fontSize: "20px", textAlign: "center", minWidth: "300px" }}>
                        SAM LAUNCH NFTS STAKED
                </h2>
                <p style={{ color: "#2DECB6", fontSize: "20px", textAlign: "center", minWidth: "300px" }}>
                    000 / 123
                </p>
                </div>
                <h2 style={{ color: "#2DECB6", fontSize: "20px", textAlign: "center", minWidth: "300px" }}>
                        STAKE HERE
                </h2>
                <label style={{ color: "white", fontSize: "20px", textAlign: "center" }}>

                <button id="stakeButton" style={{marginTop: "0%",width: "150px", borderColor: "rgb(105, 196, 166)", borderRadius: "0.5rem", fontSize: "17px", padding: "5px", fontWeight: "500", color: "#181818", background: "rgb(105, 196, 166)"}} onClick={transferNFT}>Stake Token </button>
                    <input placeholder='Token ID' style={{width: "140px", marginLeft: "10px", color: "#323232"}} onChange={logKey} id="stakingInputField" type="number" name="tokenID" />
                    <p style={{ color: "#2DECB6", fontSize: "12px", textAlign: "center", maxWidth: "300px" }}>**Staking has 2 functions: Please sign stake2, wait for completion, then sign safeTransferFrom!</p>
                </label>
                <h2 style={{ color: "white", fontSize: "20px", textAlign: "left", minWidth: "300px" }}>
                        DEPOSIT WINDOW OPEN UNTIL:
                </h2>
                <h2 style={{ color: "white", fontSize: "20px", textAlign: "center", minWidth: "300px", border: "solid 2px #fff", padding: "10px", borderRadius: "10px" }}>
                    May 10th, 7:00PM PST
                </h2>
                
            </div>)
    }


    return (<StakeButton2></StakeButton2>);
};

// function StakeButton() {

//     



//   return (
//     <button onClick={transaction}>
//       Click me!
//     </button>
//   );
// }

export default StakeButton;