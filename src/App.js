import React from "react";
import SideBar from "./component/SideBar";
import Feed from "./component/Feed";
import Widget from "./component/Widget";
import "./App.css";

const App=()=>{
    return(
        <div className="myapp">
            <SideBar/>
            <Feed/>
            <Widget/>
        </div>
    )
}
export default App;