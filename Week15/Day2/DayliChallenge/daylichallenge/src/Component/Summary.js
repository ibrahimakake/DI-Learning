// Summary.js
import React from 'react';

function Summary({ firstName, lastName, age, radio, nutsFree, select, lactoseFree, vegan }) {
  return (
    <>
      <div id='summary'>
        <h1>Entered Information:</h1>
        <p>Your Name: {firstName} {lastName}</p>
        <p>Your Age: {age}</p>
        <p>Your Gender: {radio}</p>
        <p>Your destination : {select}</p>
         
        <p>Your Dietery Restrictions:</p>
        <span>**Nuts free: {nutsFree ? 'Yes' : 'No'}</span><br />
        <span>**Lactose free {lactoseFree ? 'Yes' : 'No'}</span><br />
        <span>**Vegan {vegan ? 'Yes' : 'No'}</span>
            </div>
           </>

  )
}
export default Summary