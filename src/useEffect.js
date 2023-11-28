import React,{useState,useEffect}  from "react";

 export default function Timer(){
    const[count,setCount]=useState(0);

    useEffect(()=>{
    setTimeout(()=>{
    setCount((count)=> count+2)
    },1000);
    });
    return(
        <div>
        <h1>today time is {count} </h1>
        </div>
    )
    }
   
