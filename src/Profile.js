import React,{useState} from 'react'
 export default function App(){
    const [brand,setBrand]=useState("Toyota")
    const [color,setColor]=useState("Black")
    const [model,setModel]=useState("2023")
    return(
        <div>
            <h1> {brand} </h1>
            <h2>It is a {color} from {model}  </h2>
            
        </div>
    )
}

 