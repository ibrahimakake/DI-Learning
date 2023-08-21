import React from 'react';
import { useState } from 'react';

const Forms = () => {
    const [username, setUsername] = useState("");
    let header = "";
    const [age,setAge] = useState()
    const [errormessage,setErrormessage] = useState(false)
    const [textarea,setTextarea] = useState("The content of a textarea goes in the value attribute")
    const [selection,setSelection] = useState(["Volvo", " Ford" , "Fiat"])
    
    const handleChange = (event) => {
      setUsername(event.target.value);
      
    };

    if (username) {
        header = `Hello, ${username}!`;
      }
    
  
  const handleChange2 = (e)=>{
    
    setAge(e.target.value)
  
    if(isNaN(age)){
        setErrormessage(true)
    }
}

const handleChange3 = (e)=>{
    setTextarea(e.target.value)
}

  
  const mySubmitHandler = (e)=>{
    e.preventDefault();
    alert(`Your are submitting : ${username}`)
  }

  
    return (
      <div>
       <h1> {username} {age}</h1>
        <p>Enter your name, and submit:</p>
        <form onSubmit={mySubmitHandler}>
         <input
          type="text"
          name="username"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <p>Enter your age:</p>
        <input type='number' name="age" placeholder='Enter your age' onChange={handleChange2} value={age}/>
        <input type='button' value="submit"/>
       <p>{errormessage ? "Your age must be a number" : ""}</p>
        </form>
        <textarea value={textarea} onChange={handleChange3}/>
        <div>
        <select>
           {selection.map( (elm) =>{
            return <option value={elm}>{elm}</option>
           }

           )
           }
        </select>
        </div>
       
        </div>
    );
  };
  
  export default Forms;
  
