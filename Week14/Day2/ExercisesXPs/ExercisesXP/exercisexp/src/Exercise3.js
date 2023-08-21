import React from "react";
import './Exercise3.css'
const Exercise3 = ()=>{
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
return(
    <div className="div">
        <h1 style={{backgroundColor:style_header.backgroundColor,color:style_header.color,padding:style_header.padding,fontFamily:style_header.fontFamily}}>This is the header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://www.patterns.dev/posts/reactjs">This is a Link</a>
        <form>
            <label for='name'>Enter your name</label>
            <br></br>
            <input type='texte' id='name' placeholder="Enter your name"/>
            <input type='submit' value='Submit' id='submit' />
        </form>

        <p>Here is an Image:</p>
        <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt=""/>
 
      <h3>This is a List</h3>
         <ul>

        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        
    </ul>
     
        
        
 
    
    </div>
       
)

}


export default Exercise3;