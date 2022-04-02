import { useState,useEffect } from "react";
import TweetBox from "./TweetBox";
import axios from "axios";
import Post from "./Post";
import "./index.css";

const Feed=()=>{
    const [posts, setPosts]= useState([]);

    const fetchPosts=async()=>{
        const response= await axios.get("https://ammundhe.github.io/twitter_api/db.json")
        setPosts(response.data)
    }
    useEffect(()=>{
        fetchPosts()
    }, [])
    return(
        <div className="Feed-bar">
            <div className="home-bar">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            {posts.map((post)=>{
                console.log(post.displayName);
                return(
                    <Post 
                    key={post.userName}
                    DisplayName={post.displayName}
                    UserName={post.userName}
                    Description={post.description}
                    Verified={post.verified}
                    Image={post.image}
                    />
                )
                
            })}
        </div>
    )
}
export default Feed;