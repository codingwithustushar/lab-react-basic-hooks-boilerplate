import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

function Useeffect() {
    const [currAge, setAge] = useState(19);
    const [currSib, setSib] = useState(3);
  
    useEffect(()=>{
      alert(`something changed ${currAge}`)
    },[currAge])
  
    return(
      <div>
        <h1>useEffect</h1>
        <h3>My Current Age is {currAge}</h3>
        <h4>My siblings {currSib}</h4>
  
        <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
        <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
      </div>
    )
}

export default Useeffect