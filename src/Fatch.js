
import React, {useEffect,useState} from "react";

 export default function Fetch(){
    const [todos,setTodos] =useState([])
    useEffect(()=>{
        fetch('/api/users?page').then(response=>response )
        .then((e)=> e.json)
        .then((e)=>console.log(e));
    },[])
    return(
        <div>
        
        </div>
    )
 }