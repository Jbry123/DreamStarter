import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis, useWeb3Transfer, useERC20Balances } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import Blockie from "./Blockie";
import { Button, Card, Modal } from "antd";
import { useState } from "react";
import Address from "./Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
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

const TransferWeth = () => {
  const { check, isFetching } = useWeb3Transfer({
    amount: 1,
    receiver: "0x7Eea8EB4c4F0A34d0e72c935763C6dEA62C93316",
    type: "erc20",
    contractAddress: "0x22c383C477Abe3f7e3fcD08198430D5A81B0d7ff",
  });

  return (
    // Use your custom error component to show errors
    <div>

    </div>
  );
};

function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();
  const [isModalVisible, setIsModalVisible] = useState(false);

  if (!isAuthenticated) {
    return (
      <div
        onClick={
          () => authenticate({ provider: "walletconnect", signingMessage:"Signing this message only verifies that you own your wallet to verify $DMR holdings, and does NOT give DreamStarter permissions to sign any transactions on your behalf." })
        }
      >
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            borderColor: "transparent",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
            color: "#424242",
            backgroundImage: "linear-gradient(to right, #0de893 , #01cef6)",
          }}
          onClick={() => {
            authenticate({provider: "walletconnect", signingMessage:"Signing this message only verifies that you own your wallet to verify $DMR holdings, and does NOT give DreamStarter permissions to sign any transactions on your behalf."})
          }}
        >
          Connect Wallet
        </Button>
      </div>


    
    );
  }

  return (
    <>
      <div style={styles.account} onClick={() => setIsModalVisible(true)}>
        <p style={{ marginRight: "5px", ...styles.text }}>
          {getEllipsisTxt(walletAddress, 6)}
        </p>
        <Blockie currentWallet scale={3} />
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
            setIsModalVisible(false);
          }}
        >
          Disconnect Wallet
        </Button>

        <TransferWeth />
      </Modal>
    </>
  );
}

export default Account;
