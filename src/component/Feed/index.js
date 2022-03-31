
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./index.css"

const Feed=()=>{
    return(
        <div className="Feed-bar">
            <div className="home-bar">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
export default Feed;