import React from "react";
interface IState{};
interface IProps{};
class Body extends React.Component<IState,IProps>{
    render(){
        return(
            <h1 style={{color:"blue"}}>this is body pages</h1>
        )
    }
}
export default Body;