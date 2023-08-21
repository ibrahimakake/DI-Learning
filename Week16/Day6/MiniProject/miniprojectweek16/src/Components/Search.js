import React from "react";
import { useState } from "react";


function Search({handleSearch}){

    const [userInput,setUserInput] = useState('')

   function handleSubmite(e){
       e.preventDefault();
     while(userInput !==""){
        return handleSearch(userInput)
     }
      
    }

    return(
  <div>
        <form onSubmit={handleSubmite}>
           <input type='text' value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
           <input type='submit'/>
        </form>

  </div>
    )
}
export default Search;