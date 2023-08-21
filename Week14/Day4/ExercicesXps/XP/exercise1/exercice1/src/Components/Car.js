import React from "react";
import { useState } from "react";
import Garage from './Garage'

function Car({carinfo}) {

    const [color,setColor]= useState('red')
    
    
        
        return(
            <>
            <header>This Car is {carinfo.model}</header>
            <p>This Car is a <span style={{color:"red"}}>{color} </span>{carinfo.model}</p>
            <Garage size="small" />
            </>
        )
        
   
   
}
  


 export default Car;