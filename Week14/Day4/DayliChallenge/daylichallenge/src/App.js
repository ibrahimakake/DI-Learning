import React, { useState } from "react";
import './App.css';
import {tachyons} from 'tachyons'

const App = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "Javascript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  /*const handleClick = (name) => {
    setLanguages(prevLanguages => prevLanguages.map(language =>
      language.name === name ? { ...language, votes: language.votes + 1 } : language
    ));
  };*/

  const handleClick = (name) => {
    setLanguages((prevLanguages) => {
      return prevLanguages.map((language) => {
        if (language.name === name) {
          return { ...language, votes: language.votes + 1 };
        }
        return language;
      });
    });
  };
  

  function Voting({ name, votes, handleClick }) {
    return (
      <>
        <div className="language">
          <span>{votes}</span>
          <span>{name}</span>
          <button onClick={() => handleClick(name)}>Click Here</button>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="tc">Vote your language!</h1>
      <div className="languages">
        {languages.map((language, index) => (
          <Voting key={index} name={language.name} votes={language.votes} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default App;
