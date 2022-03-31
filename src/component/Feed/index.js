
import TweetBox from "./TweetBox";
import "./index.css"

const Feed=()=>{
    return(
        <div className="Feed-bar">
            <div className="home-bar">
                <h2>Home</h2>
            </div>
            <TweetBox/>
        </div>
    )
}
export default Feed;