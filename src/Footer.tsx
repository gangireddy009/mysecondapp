import React from "react";
interface IState{}
interface IProps{};
class Footer extends React.Component<IState,IProps>{
    render(){
        return(
            <h1 style={{color:"green"}}>this is footer pages</h1>
        )
    }
}
export default Footer;