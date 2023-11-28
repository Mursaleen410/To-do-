import React, {useRef} from "react";

 export default function Ref(){
    const focusPoint=useRef(null);
    const actionHandel=()=>{
        if (focusPoint.current) {
            focusPoint.current.value = "My name is Mursaleen";
            focusPoint.current.focus();
          }
    };
    return(
        <div>
           <button onClick={actionHandel}>CLick Me</button> {}
           
           <textarea ref={focusPoint} />
        </div>
    )
 }