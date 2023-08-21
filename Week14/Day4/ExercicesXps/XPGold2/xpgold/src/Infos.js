import React from "react";
import Forms from "./Forms";
import {tachyons} from 'tachyons'

function Infos({firstName, lastName, phone,email, handleReset}){

const handleClick = (e)=>{
    handleReset()
}

    return(
        <>
        <div className=" tc bg-light-green ma3 pa3">
        <div>
       <p>{lastName}, {firstName}</p>
       </div>
           <div>
            {phone} |  {email}
        </div>
            <div>
           <button onClick={handleClick}>Reset</button>
        </div>
        </div>
      
        </>
        
    )
}
export default Infos;