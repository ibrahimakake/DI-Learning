import React from "react";
import Example from "../data2.json";

class Example1 extends React.Component {
  constructor() {
    super();
  }

  render() {

    const example = Example[0];

    return (
      <div>
       
        {example.SocialMedias.map((socialMedia, index) => (
          <ul key={index}>
            <li>{socialMedia}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Example1;
