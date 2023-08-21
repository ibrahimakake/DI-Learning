import { useState } from 'react';
import './App.css';
import quotes from './QuotesDatabase';
function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState('#FF0000');
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);//generer des quotes aleatoires
    return quotes[randomIndex];
  }
  function generateQuote() {
    let newQuote = getRandomQuote();
    while (newQuote.quote === currentQuote.quote) { //si on a la meme quotes
      newQuote = getRandomQuote();
    }
    setCurrentQuote(newQuote);
    const randomBackgroundColor = getRandomColor();
    setBackgroundColor(randomBackgroundColor);
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
return (
  //container
  <div className="App" style={{ backgroundColor }}>
    <div className="quote-container">
      <h1 className="quote-header" style={{ color: backgroundColor }}>
        {currentQuote.quote}
      </h1>
      <p className="quote-author" style={{ color: backgroundColor }}> {currentQuote.author}</p>
      <button
        className="new-quote-button"
        style={{ backgroundColor: backgroundColor }}
        onClick={generateQuote}
      >
        New Quote
      </button>
    </div>
  </div>
);
}
export default Quotes;


/*import {useState} from 'react';
import  Quote from './QuotesDatabase';
import './App.css'

function GenerateQuote(){

   const [currentQuote, setCurrentQuote ] = useState(getRandomQuote());
    const [backgroundColor, setBackgroundColor ] = useState('#FF0000');

   const getRandomQuote = () =>{
        let randomIndex = Math.floor(Math.random()* Quote.length)
        return Quote[randomIndex]
    }

    const newQuote = ()=>{
        let newAuthorQuote = getRandomQuote();
        while(newAuthorQuote.quote === currentQuote.quote){
            newAuthorQuote = getRandomQuote();
        }
       
        setCurrentQuote(newAuthorQuote);

       let randomBackgroundColor = getRandomColor();
    
        setBackgroundColor(randomBackgroundColor);
    }

   

    getRandomColor = ()=>{
        const letters = '0123456789ABCDEF';
        let color='#'
        for(let i = 0; i<6;i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color;
    }


return(
    <div className='App' style={{backgroundColor}}>
        <div className='quote-container'>
         <h1 className='quote-header' style={{color : backgroundColor}}>
            {currentQuote}
         </h1>
         <p className='quote-author' style={{color: backgroundColor}}>
            {currentQuote.author}
         </p>
         <button className='new-quote-button' style={{backgroundColor : backgroundColor}} onClick={newQuote}>New Quote</button>
        </div>
    

    </div>
)

}

   

export default GenerateQuote;*/