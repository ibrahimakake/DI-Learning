import React from 'react'
import { useState,useEffect } from 'react';

function Clock(){

const [currentDate,setCurrentDate] = useState("")

function tick(){
   setCurrentDate(new Date().toLocaleString())
}

useEffect(()=>{
 
     const timer = setTimeout (tick,1000);

     return ()=> clearTimeout (timer)

},[currentDate] )


 return(
    <>
    <h1>Hello, world!</h1>

    <div>
      {currentDate}
    </div>
   
    </>
    )
}

export default Clock;