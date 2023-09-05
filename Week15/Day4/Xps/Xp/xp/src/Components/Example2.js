import React from "react";
import Example from "../data2.json"

class Example2 extends React.Component {
  render() {
    const example = Example[0];

    return (
      <div>
        <h3>{example.Skills[0].Area}</h3> 
        {example.Skills[0].SkillSet.map((skill, index) => ( 
          <ul key={index}>
            <li>{skill.Name}</li>
          </ul>
        ))}
        <br/>
        <h3>{example.Skills[1].Area}</h3> 
        {example.Skills[1].SkillSet.map((skill, index) => ( 
          <ul key={index}>
            <li>{skill.Name}</li>
          </ul>
        ))}


      </div>
    );
  }
}

export default Example2;
