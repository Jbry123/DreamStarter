import {useMoralisDapp} from "providers/MoralisDappProvider/MoralisDappProvider"
import {useState} from "react"
import Posts from "./components/Posts"
import Reputation from "components/Reputation"

import {Avatar, Button }from "antd" 
import glStyles from "components/gstyles"
import Blockie from "components/Blockie"
import AddPost from "./components/AddPost"

const Feed = () => {
    const {selectedCategory} = useMoralisDapp();
    const [showAddPost, setShowAddPost] = useState(false)

    let result = null;
    
    function toogleShowAddPost(){
        setShowAddPost(!showAddPost);
    }

    if (selectedCategory["category"] === "default") {
        result = (
          <div className="col-lg-9">
            <h3>Choose a Category</h3>
          </div>
        );
      }
    else {
        result = (
        <div className="col-lg-9">
            <div
                style={{
                    ...glStyles.card,
                    padding: "10px 13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Avatar src={<Blockie currentWallet />} />
                <h4> Your Reputation in {selectedCategory["category"]} is <Reputation/> </h4>
                <Button shape="round" onClick={toogleShowAddPost}>
                    Post
                </Button>
            </div>
            {showAddPost ? <AddPost/>:""}
            <Posts/>
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
          }}
        >
          Disconnect Wallet
        </Button>
        </div>    
        )
    }
    
    return result;
}

export default Feed
