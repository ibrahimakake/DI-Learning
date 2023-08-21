import React from "react";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise3 from "./Exercise3";

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;

const App = () => {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
  };


  return (
   
    <div>
      <h1>Hello World!</h1>
        {myelement}
        <h4> React is {sum} times better with JSX</h4>
      <h3>{user.firstName} {user.lastName}</h3>
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteAnimals fav_animals={user.favAnimals} />
      <Exercise3/>
    </div>
  );
};

export default App;
