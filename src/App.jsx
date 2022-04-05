import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Account from "components/Account";
import { Layout, Button} from "antd";
import "antd/dist/antd.css";
import DreamStarterlogo from "./components/img/Rocket-Dreamstarter.png";
import "./style.css";
import Home from "components/Home"
import Main from "components/Main"
const { Header} = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    padding: "10px",
  },
  header: {
    position: "relative",
    zIndex: 1,
    height: "115px",
    width: "100%",
    background: "#424242",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};

// let dmrBalance = 0;
//   let dmrTier = "Tier 1";
//   const options = {
//     chain: "polygon",
//     address: "0xF01b4F7153689Ec2f53A48818eDA8f740A6f41B3",
//     to_block: "25998779"
//   };
//   const balance = useMoralis().Moralis.Web3API.account.getTokenBalances(options);

//   balance.then(function(result) {
//     dmrBalance = result; //or what you want to assign it to

//     dmrBalance = result.filter(node => node.name === "Dreamr Platform Token (PoS)");
//     dmrBalance = dmrBalance[0].balance / 1000000000000000000;
//     if (dmrBalance >= 250000) {
//       dmrTier = "Tier 5";
//       console.log(dmrTier);
//       return;
//     } else if (dmrBalance >= 100000) {
//       dmrTier = "Tier 4";
//       console.log(dmrTier);
//       return;
//     } else if (dmrBalance >= 50000) {
//       dmrTier = "Tier 3";
//       console.log(dmrTier);
//       return;
//     } else if (dmrBalance >= 25000) {
//       dmrTier = "Tier 2";
//       console.log(dmrTier);
//       return;
//     } else if (dmrBalance >= 1000) {
//       dmrTier = "Tier 1";
//       console.log(dmrTier);
//       return;
//     } else if (dmrBalance >= 0) {
//       dmrTier = "starter";
//       console.log(dmrTier);
//       return;
//     }

//   })

//   console.log(balance, 'test balance');


const App = ({ isServerInfo }) => {

  const { authenticate, isWeb3Enabled, enableWeb3, isAuthenticated, user, account, logout, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <Layout style={{ height: "100vh", overflow: "auto",  }}>
      <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <div style={styles.headerRight}>
          <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            borderColor: "#69c4a6",
            borderRadius: "0.5rem",
            fontSize: "17px",
            padding: "5px",
            fontWeight: "400",
            color: "#f2f2f2",
            background: "transparent"
          }}
          onClick={() => {
            window.location = 'https://steady-begonia-40a16f.netlify.app/home';
          }}
        >
          Earn
        </Button>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            borderColor: "#69c4a6",
            borderRadius: "0.5rem",
            fontSize: "17px",
            padding: "5px",
            fontWeight: "400",
            color: "#f2f2f2",
            background: "transparent"
          }}
          onClick={() => {
            window.location = 'https://steady-begonia-40a16f.netlify.app/home';
          }}
        >
          About
        </Button>
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/main">
              <Main/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/nonauthenticated">
              <h3>Please login using the "Authenticate" button</h3>
            </Route>
          </Switch>
          {/* {isAuthenticated ? <Redirect to="/main" /> : <Redirect to="/nonauthenticated" />} */}
        </div>
      </Router>
    </Layout>
  );
};

export const Logo = () => <img style={{width: "270px", height: "auto"}} src={DreamStarterlogo} />

export default App;
