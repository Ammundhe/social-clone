
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import SideBarOption from './SideBarOption';
import "./index.css";


const SideBar=()=>{
    return(
        <div className='sideBar'>
            <TwitterIcon className="twitterIcon-bar"/>
            <SideBarOption active text="Home" Icon={HomeIcon}/>
            <SideBarOption text="Explore" Icon={SearchIcon}/>
            <SideBarOption text="Notifications" Icon={NotificationsIcon}/>
            <SideBarOption text="Message" Icon={MailOutlineIcon}/>
            <SideBarOption text="Bookmark" Icon={BookmarkBorderIcon}/>
            <SideBarOption text="List" Icon={ListAltIcon}/>
            <SideBarOption text="Profile" Icon={PermIdentityIcon}/>
            <SideBarOption text="More" Icon={MoreHorizIcon}/>
            <Button variant='outlined' className='button-bar' fullWidth>Tweet</Button>
        </div>
    )
}
export default SideBar;