
import "./index.css"

const SideBarOption=({active,text, Icon})=>{
    return(
        <div className={`sideBarOptions ${active && "activeSidebar"}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}
export default SideBarOption;