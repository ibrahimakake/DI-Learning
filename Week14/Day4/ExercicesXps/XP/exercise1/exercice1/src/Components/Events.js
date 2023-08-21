import React from "react";
import { useState } from "react";

function Events (){


   // const [isTggleOn,setIsTggleOn]= useState(true)


const clickMe = ()=> alert("I was click")


const handleKeyDown = (e)=> {
  
    if (e.keyCode === 13) {
        alert(`The Enter key was pressed, your input is: ${e.target.value}`);
      }
      
    }


 const [isToggleOn, setIsToggleOn] = useState(true);

 const handleClick = () => {
   setIsToggleOn((prevState) => !prevState);
 };
   

return(
    <>
    <button type="button" onClick={clickMe}>Click</button>
    <input type="text" placeholder="Enter..."
     onKeyDown={handleKeyDown} />
      <div>
      <h2>Toggle Button</h2>
      <button onClick={handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
    </>
)
}

export default Events;