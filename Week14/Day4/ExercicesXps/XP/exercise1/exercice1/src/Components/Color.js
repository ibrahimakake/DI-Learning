import React, { useTransition } from "react";
import { useState, useEffect } from "react";


function Color(){
const [favoriteColor,setFavoriteColor]= useState("red")

useEffect(()=>{
   // alert("useEffet reached")
    setTimeout(()=>{
      setFavoriteColor("yellow ")
    },5000)
  })
const handleClick = ()=>{
    setFavoriteColor("blue")
}
return(
    <>
    <header>My favorite Color is {favoriteColor}</header>
    <button onClick={handleClick}>Click me</button>
    </>
)
}

export default Color;