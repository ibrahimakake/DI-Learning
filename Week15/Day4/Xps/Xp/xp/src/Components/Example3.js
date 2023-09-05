import React from "react";
import Example from "../data2.json";

class Example3 extends React.Component {
  render() {
    const experience = Example[0]
    const experiences = experience.Experiences.map((xp, index) => {
      return (
        <div key={index}>
         
          <img src={xp.logo} width="100" height="100" alt={xp.companyName} />
             <p>{xp.companyName}</p>
          {xp.roles.map((role) => (
            <>
             <p >{role.title}</p>
             <span>{role.startDate}</span>,<span>{role.location}</span>
             <p>{role.description}</p>
            </>
           
          ))}
        </div>
      );
    });

    return experiences;
  }
}

export default Example3;


