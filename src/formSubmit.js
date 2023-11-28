import React from "react";
export default class Form extends React.Component{
    constructor(){
        super()
        this.state={
            user:"",
            password:""

        }
    }
    valid(){
        if(!this.state.user.includes("0") && this.state.password.length<6){
            this.setState({userError:"invalid user"})
        }
    }
    submit(){
        if(this.valid())
       alert("submit")
    }
    render(){
        return(
            <div>
                <h1>Form Handling</h1>
                <label>User</label>
                <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}}></input>
                <p style={{color:"red"}}>{this.state.userError}</p>
                <br></br>
                <label>password</label>
                <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input>
                <p style={{color:"red"}}>{this.state.passwordError}</p>
                <br></br>
                <button onClick={()=> this.submit()}>Submit</button>
            </div>
        )
    }
}