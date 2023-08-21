import React from "react";

const UserFavoriteAnimals = (props) => {
    const { fav_animals } = props;
  
    const listItems = fav_animals.map((animal, index) => (
      <li key={index}>{animal}</li>
    ));
  
    return (
      <ul>
        {listItems}
      </ul>
    );
  };

  export default UserFavoriteAnimals;