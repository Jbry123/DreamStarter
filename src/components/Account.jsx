import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis, useWeb3Transfer, useERC20Balances } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import Blockie from "./Blockie";
import { Button, Card, Modal } from "antd";
import { useState } from "react";
import Address from "./Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import metamaskIcon from "./img/metamask-icon.webp";
import WalletConnectIcon from "./img/walletconnect.png";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
    lineHeight: "1",
  },
};

// const TransferWeth = () => {
//   const { fetch, error, isFetching } = useWeb3Transfer({
//     amount: 1,
//     receiver: "0x7Eea8EB4c4F0A34d0e72c935763C6dEA62C93316",
//     type: "erc20",
//     contractAddress: "0x22c383C477Abe3f7e3fcD08198430D5A81B0d7ff",
//   });

//   return (
//     // Use your custom error component to show errors
//     <div>
//       <button onClick={() => fetch()} disabled={isFetching}>
//         Transfer
//       </button>
//     </div>
//   );
// };


function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!isAuthenticated) {
    setInterval(function () {
      
    }, 2000);
    return (
      <div
        // onClick={
        //   () => authenticate({ signingMessage:"Signing this message only verifies that you own your wallet to verify $DMR holdings, and does NOT give DreamStarter permissions to sign any transactions on your behalf." })
        // }
      style={{display: "flex", width: "200px" }}>
        <h4 style={{display: "flex", alignItems: "center",fontSize: "20px", color: "white", fontFamily: "Roboto", fontWeight: "500", width: "78px", marginLeft: "5px",  marginRight: "5px", textAlign: "center"}}>Login:</h4>
        
        <img id="loginIcon" onClick={() => {
            authenticate({ signingMessage:"Signing this message only verifies that you own your wallet to verify $DMR holdings, and does NOT give DreamStarter permissions to sign any transactions on your behalf."})
          }} src={metamaskIcon} alt="" style={{width: "52px", background: "#e7821f", padding: "5px", borderRadius: "100%"}}>
            </img>

        <img id="loginIcon" onClick={() => {
            authenticate({provider: "walletconnect", signingMessage:"Signing this message only verifies that you own your wallet to verify $DMR holdings, and does NOT give DreamStarter permissions to sign any transactions on your behalf."})
          }} src={WalletConnectIcon} alt="" style={{width: "52px", background: "#2180fc", padding: "5px", borderRadius: "100%", margin: "0% 20px 0px 10px"}}>
            </img>
      </div>


    
    );
  }

  return (
    <>
      <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(walletAddress, 5)}
        </p>
        <Blockie currentWallet scale={3} />
        <h4 id="tierHeaderText" style={{fontSize: "13px", fontFamily: "Roboto", fontWeight: "700", width: "48px", marginLeft: "5px"}}>TIER: ?</h4>
      </div>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${walletAddress}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={() => {
            logout();
          }}
        >
          Disconnect Wallet
        </Button>

      </Modal>
    </>
  );
}

export default Account;
