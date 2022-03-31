
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PublishIcon from '@mui/icons-material/Publish';
import "./index.css"


const Post=()=>{
    return(
        <div className="Post">
            <div className="Post-avatar">
                <Avatar/>
            </div>
            <div className="Post-body">
                <div className="Post-header">
                    <div className="post-header-text">
                        <h3>
                            Amol Mundhe {" "}
                            <span className="post-header-special">
                                <VerifiedUserIcon className="post-badge"/>
                                @am_mundhe
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-description">
                        <p>Hello world greets from me for all developer</p>
                    </div>
                </div>
                <img src="https://media1.giphy.com/media/gd09Y2Ptu7gsiPVUrv/giphy.gif" alt="" />
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}
export default Post;