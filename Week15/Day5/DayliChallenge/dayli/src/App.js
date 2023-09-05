import React, { Component } from 'react';
import "./App.css"
import heroes from "./data/heroes.json"

class App extends Component {

  constructor() {
    super()
    this.state = {
      heroes: heroes.superheroes,
      clickHeroes: [],
      score: 0,
      topScore:0
    }
  }

  handleClick = (heroName) => {
    this.setState((state) => {
      const newScore = state.clickHeroes.includes(heroName) ? 0 : this.state.score + 1;
      const clickHeroes = state.clickHeroes.includes(heroName) ? [] : [...state.clickHeroes, heroName];

      return {
        heroes: [...state.heroes].sort((a, b) => Math.random() > 0.5 ? -1 : 1),
        clickHeroes: clickHeroes,
        score: newScore,
        topScore: Math.max(newScore,state.topScore)
      };
    });
  }

  render() {
    return (
      <div className='container'>
        <nav className='navbar'>
          <h1>
            Superheroes React Memory Game
          </h1>
          <div>Score: {this.state.score}</div>
          <div>Top Score: {this.state.topScore}</div>
        </nav>
        <h2 className='rules'>Get points by clicking in the image but not click on the same one twice</h2>
        <div className='heroes-container'>
          {this.state.heroes.map((hero) => {
            return (
              <div key={hero.id} className='heroe-card' onClick={() => this.handleClick(hero.name)}>
                <div className='image-container'>
                  <img src={hero.image} alt={hero.name} />
                </div>
                <p>
                  <span className='bold'>Name : </span> {hero.name}
                </p>
                <p>
                  <span className='bold'>Occupation : </span> {hero.occupation}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default App;

