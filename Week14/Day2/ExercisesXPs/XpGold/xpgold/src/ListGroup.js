import React from "react";

const ListGroup = (props)=>{
let {planets}= props

return(
    <div className="card m-5" style={{width: '30rem'}} >
        <h3>
            Here are some planets
        </h3>
    <ul class="list-group">
   {planets.map((elm,i) => (
     <li  class="list-group-item" key={i}>{elm}</li>
   ))
     } </ul>
    </div>
        
   
)

}

export default ListGroup;