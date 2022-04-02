
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PublishIcon from '@mui/icons-material/Publish';
import "./index.css"
import { Description } from "@mui/icons-material";


const Post=({DisplayName, UserName, Verified, Description, Image})=>{
    return(
        <div className="Post" key={UserName}>
            <div className="Post-avatar">
                <Avatar/>
            </div>
            <div className="Post-body">
                <div className="Post-header">
                    <div className="post-header-text">
                        <h3>
                            {DisplayName} {" "}
                            <span className="post-header-special">
                                {Verified && <VerifiedUserIcon className="post-badge"/>}
                                @{UserName}
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-description">
                        <p>{Description}</p>
                    </div>
                </div>
                <img src={Image} alt="" />
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