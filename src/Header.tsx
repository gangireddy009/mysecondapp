import React from "react";
interface IState{};
interface IProps{};
class Header extends React.Component<IState,IProps>{
    render(){
        return(
            <h1 style={{color:"red"}}>this is header pages</h1>
        )
    }
}
export default Header;