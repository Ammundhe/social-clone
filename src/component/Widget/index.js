
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import "./index.css";

const Widget=()=>{
    return(
        <div className="Widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon"/>
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets-container">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="cleaverqazi" options={{height:400}}/>
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{text:"hello world i am here", vai:"cleaverqazi"}}/>
                
            </div>
        </div>
    )
}
export default Widget;