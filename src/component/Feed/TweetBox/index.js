import { useState } from "react";
import { Avatar, Button  } from "@mui/material";
import axios from "axios";
import "./index.css";


const TweetBox=()=>{
    const [textmsg, setTextmsg]=useState("")
    const [image, setImage]=useState("")
    const fetchPosts=async()=>{
        const object={
            displayName:"Amol Mundhe",
            userName:"am_mundhe",
            description:textmsg,
            verified:true,
            image:image,
        }
        const response= await axios.post("https://ammundhe.github.io/twitter_api/db.json", object)

    }
    const tweet=(e)=>{
        e.preventDefault()
        fetchPosts()
        setImage("")
        setTextmsg("")
    }
    return(
        <div className="tweet-box">
            <form>
                <div className="tweet-box-input">
                    <Avatar src=""/>
                    <input type="text" value={textmsg}  placeholder="What's happening?" onChange={(e)=>setTextmsg(e.target.value)} />
                </div>
                <input type="text" value={image} className="tweet-image" placeholder="Optional: Enter image url" onChange={(e)=>setImage(e.target.value)}/>
                <Button onClick={tweet} className="button-bar">
                    Tweet
                </Button>
            </form>
        </div>
    )
}
export default TweetBox;