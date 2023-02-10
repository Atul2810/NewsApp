import React, { useEffect, useRef, useState } from 'react'

function Hooks() {
    const [counter,setCounter]=useState(0);
    const refCounter=useRef(0);
    let normalCounter=0;
    useEffect(()=>{
        console.log("State counter updated : ",counter)
        console.log("ref counter updated : ",refCounter.current)
        console.log("Normal counter",normalCounter)

        return ()=>{
            console.log("Unmounting")
        }
    })
    function setIncrement(){
        setCounter(counter+1);
        refCounter.current+=1;
        normalCounter+=1;
    }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={setIncrement}>Increment</button>
    </div>
  )
}

export default Hooks

