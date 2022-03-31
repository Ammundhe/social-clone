
import { Avatar, Button  } from "@mui/material";
import "./index.css"
const TweetBox=()=>{
    return(
        <div className="tweet-box">
            <form>
                <div className="tweet-box-input">
                    <Avatar src=""/>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input type="text" className="tweet-image" placeholder="optional: enter image url"/>
                <Button className="button-bar">
                    Tweet
                </Button>
            </form>
        </div>
    )
}
export default TweetBox;