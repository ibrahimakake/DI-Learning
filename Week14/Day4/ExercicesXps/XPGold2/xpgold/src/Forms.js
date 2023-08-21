import React from 'react';
import { useState } from 'react';
import {tachyons} from 'react';
import Infos from './Infos'

function Forms(){
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [isSubmited,setIsSubmited] = useState(false);

    const handleSubmit = (e)=>{
     e.preventDefault();


     if(firstName !=='' && lastName !=='' && phone !=='' && email !=='' ){
         
        setIsSubmited(true)

     }else{
        setIsSubmited(false)
        alert("At least one input type is not respected !")
     }
     
    }


     const  handleReset = ()=>{
        setIsSubmited(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("")
     }
  
if(!isSubmited){
    return(
        <div className=" tc bg-light-green ma3 pa3">
            <h1>Welcome !</h1>
            <p>Please provide your information below.</p>
            <form onSubmit={handleSubmit}>
                <div>
                <input type='text' value={firstName} placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div>
                <input type='text' value={lastName}  placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div>
                <input type='tel' value={phone}  placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div>
                <input type='email' value={email}  placeholder="Email Adress" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <input type='submit' value="Subtmit"/>
                </div>
               </form>
        </div>
    )
}else{
    return(
        <Infos handleReset={handleReset} firstName={firstName} lastName={lastName} phone={phone} email={email} />
    )

}
  
}

export default Forms;