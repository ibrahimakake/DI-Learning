import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Gallery from './Gallery';
import Search  from "./Search";
import Menu from './Menu'




function Home(){
  const [images,setImages] = useState([])
  const {category}= useParams();

  const key = 'rhkMreP35bdjSueujJVLbHeWWXvBYCwbBAKmpyoiytgI3kSR4kK7cWkD'

  
  useEffect(()=>{
    
    fetch(`https://www.pexels.com/v1/search?query=${category}`,{
      
    headers :{
        Autorization : key
      }
    }
   
    ).then((res)=>res.json())
    .then((data)=> setImages(data.photos))
    .catch((error)=>console.error(error))
   })
  
  const handleSearch = (cat)=>{
      fetch(`https://www.pexels.com/v1/search?query=${cat}`,
      {
      
        headers :{
            Autorization : key
          }
        }
      ).then((res)=>res.json())
      .then((data)=> setImages(data.photos))
      .catch((error)=>console.error(error))
  }
return(
    <div>

        <h1> Snap Shop</h1>
        
        <Search handleSearch={handleSearch}/>
        <Menu/>
        <Gallery images={images}/>
    </div>
)
}

export default Home;