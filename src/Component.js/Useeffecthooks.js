import React from 'react'
import { useEffect,useState } from 'react'
function Useeffecthooks() {
   const [counter,setcounter]=useState(0);
   const [name,setname]=useState('');
   function Unmount(){
    
   }
   useEffect(()=>{
    console.log("Name updated")

    return Unmount;

   },[name])

   useEffect(()=>{
    console.log("counter updated")
   },[counter])

   useEffect(()=>{
    console.log("first time mounted");
   },[])
   useEffect(()=>{
    console.log("Re-rendering occur");
   })
  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(event)=>setname(event.target.value)} />
      <button onClick={()=>setcounter(counter+1)}>Increment Counter</button>
    </div>
  )
}

export default Useeffecthooks
