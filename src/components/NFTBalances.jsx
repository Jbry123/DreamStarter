import { useMoralis, useMoralisWeb3Api, useWeb3Transfer } from "react-moralis";
import React from "react";
import { useState } from "react";
import TwitterLogo from "./img/twitterCircle.png";
import OpenSeaLogo from "./img/OpenseaCircle.png";
import GlobeLogo from "./img/globe.png";
import StakeButton from "./StakeButton";
import StakedBalance from "./StakedBalance";

const NFTBalances = () => {

    const styles = {
        headerText: {
            margin: "30px 0px;",
            fontSize: "40px",
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#f2f2f2",
            height: "95px",
            width: "100%",
            padding: "0px 30px"
        },
    
        headerText2: {
            marginTop: "75px",
            fontSize: "40px",
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#f2f2f2",
            height: "95px",
            width: "100%",
            padding: "0px 30px",
            textAlign: "center"
        },
    
        tabs: {
            fontSize: "38px",
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#f2f2f2",
            height: "auto",
            width: "100%",
            padding: "0px 30px"
        },
    
        pText: {
            fontFamily: "Roboto",
            fontSize: "15.5px",
            color: "#b1b1b1",
            width: "100%",
            padding: "0px 30px",
            overflow: "overlay"
        }
    
    
    
    };

    const RDBNFTs = () => {



        const { authenticate, isAuthenticated, logout } = useMoralis();

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


        // const transfer = useWeb3Transfer({
        //   type: "erc721",
        //   receiver: "0x75a6D6040db1346D968B90a5b10Bb8e1727E517c", //staking contract
        //   contractAddress: "0x9bFE6140Fe556e2E63E940FeB1bB8263F6d3E539",//NFT contract
        //   tokenId: 12,
        // });

        // const sendOptions = {
        //   contractAddress: "0x75a6D6040db1346D968B90a5b10Bb8e1727E517c",
        //   functionName: "stake2",
        //   abi: ABI,
        //   params: {
        //     _tokenId: "12",
        //   },
        // };
        // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"
        if (!isAuthenticated) {
            setTimeout(function () {
                if (!isAuthenticated) {
                    return;
                }
            }, 2000)
        }




        const Web3Api = useMoralisWeb3Api()
        console.log('DOM fully loaded and parsed');

        const options = { chain: "matic", token_address: "0x5C45512C39958c73bDdcdCC1179C049D0D079b73"};
        const GetNFTS = Web3Api.account.getNFTsForContract(options);
        let RDBObjectsFromOwner = [];
        const [RDBObject, setRDBObject] = useState(RDBObjectsFromOwner)
        const handleClick = () => {
            setRDBObject(RDBObjectsFromOwner)
            console.log(RDBObject, 'handle');
            let RDBHTML = `<div className="cardContainer" style="display: flex; flex-wrap: wrap; justify-content: center;">`;
            if (RDBObject.length < 1) {
                console.log("hi");
                RDBHTML = `<h2 style="font-size: 18px; font-family: Rubik; color: white; padding: 4% 2%; text-align: center; font-weight: 500;">NO NFTS FOUND</h2>`;
                document.getElementById("test").innerHTML = RDBHTML;
            }
            for (let i = 0; i < RDBObject.length; i++) {

                RDBHTML += `
                <div className="card" id="card2" style="background: rgb(49, 50, 51); font-family: Rubik; padding: .61%; margin: 1.5%; max-width: 285px; border: solid 2px rgb(105, 196, 166); transition: 0.3s; border-radius: 5px;">
                    <img className="cardImage" style="border-radius: 5px 5px 0 0;" src="` + RDBObject[i].image.replace('ipfs://', 'https://ipfs.io/ipfs/') + `" alt="Avatar" style="width:100%">
                    <div className="container">
                        <h4 style="font-size: 18px; font-family: Rubik; color: white; padding: 4% 2%; text-align: center; font-weight: 500;"><b>`+ RDBObject[i].name + `</b></h4>
                        <p style="font-size: 13.6px; font-family: Rubik; color: white; padding: 4% 2%; text-align: center; font-weight: 500;">Stake this nft by entering the token ID in the box to the right, then unstake 30 days later to claim your rewards!<br/>(Your NFT will be locked up for this period, no early withdrawals.</p>
                        <div className="buttonContainer" style="display: flex; flex-wrap: wrap; justify-content: center;">
                        
                        <a className="stakingButton2" style="display: none !important; width: 100%; font-size: 14px; font-family: Roboto; font-weight: 400;"}}>
                          <button data-tokenId="`+ RDBObject[i].tokenId + `" id="stakingButton" style=" display: none !important; margin-top: 2%; width: 100%; border: none; background: linear-gradient(45deg, #2DECB6, #46A7DE); border-radius: 0.5rem; font-size: 17px; padding: 5px; font-weight: 400; color: white;"}}>*Staking Coming*</button>
                        </a>
                    </div>
                    </div>
                </div>`
                if (i == RDBObject.length) {
                    RDBHTML += `</div>`;
                }
                document.getElementById("test").innerHTML = RDBHTML;
                console.log(RDBHTML, 'added1');
            }


        }

        let alreadyRendered = false;

        if (alreadyRendered) {
            return;
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
            }).finally(() => {
                setRDBObject(RDBObjectsFromOwner)
                console.log(RDBObject, 'test1')
                alreadyRendered = true;
                return (RDBObjectsFromOwner);



            });
        console.log(RDBObject.length, "rdb");
        setTimeout(() => {
        }, 1000);
        return (

                <div style={{ display: "flex", justifyContent: "center", width: "200px" }}>
                    <button style={{ marginTop: "2%", width: "250px", borderColor: "rgb(105, 196, 166)", borderRadius: "0.5rem", fontSize: "17px", padding: "5px", fontWeight: "500", color: "black", background: "rgb(105, 196, 166)" }} onClick={handleClick}>Get Stakable NFTs! </button>
                </div>

        )
    }


    return (

        <div className="" id="vaultContainerBig" style={{padding: "32px", borderRadius: "10px", minHeight: "620px", width: "62%", marginRight: "1.5%"}}>
            {/* <img src={RDBObjectsFromOwner} alt="Avatar" style={{width:"100%"}} />
    <div class="container">
      <h4><b>{RDBObjectsFromOwner}</b></h4>
      <p>{RDBObjectsFromOwner}</p>
    </div> */}
            <div style={{display: "flex", flexWrap: "wrap", width: "100%", flexWrap: "nowrap", paddingBottom: "35px" }}>
                <img src="https://dreamstarter.co/wp-content/uploads/2022/04/DREAMR-SYMBOL-GREEN-01.png" alt="" style={{ height: "68px", width: "auto" }}></img>
                
                <div style={{display: "flex", width: "100%", justifyContent: "flex-end" }}>
                    <a href="https://twitter.com/DreamStarterDAO" style={{width: "52px", padding: "5px", borderRadius: "100%"}}>
                        <img id="loginIcon" src={TwitterLogo} alt="" style={{width: "52px", padding: "2px", borderRadius: "100%"}}>
                        </img>
                    </a>
                    <a href="https://app.dreamstarter.co/" style={{width: "52px", padding: "5px", borderRadius: "100%"}}>
                        <img id="loginIcon" src={GlobeLogo} alt="" style={{width: "52px", padding: "2px", borderRadius: "100%"}}>
                        </img>
                    </a>
                    <a href="https://opensea.io/collection/sun-moon-launch-nft" style={{width: "52px", padding: "5px", borderRadius: "100%"}}>
                        <img id="loginIcon" src={OpenSeaLogo} alt="" style={{width: "52px", padding: "2px", borderRadius: "100%"}}>
                        </img>
                    </a>
                </div>
            </div>

            <h2 style={{ fontSize: "32px", fontFamily: "Roboto", fontWeight: "400", color: "white", textAlign: "left" }}>Sun & Moon "LAUNCH" Vault</h2>
            <p style={{... styles.pText, padding: "0"}}>Stake your Sun & Moon NFT and earn rewards in $DMR</p>
            <div id="test"></div>

            <div style={{display: "flex", justifyContent: "center", margin: "20px", paddingTop: "150px"}}>
                <RDBNFTs />
                <StakedBalance></StakedBalance>
            </div>

        </div>
    );
};


export default NFTBalances;