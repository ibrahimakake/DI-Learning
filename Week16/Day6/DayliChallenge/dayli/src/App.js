import React from 'react'
import "./App.css"
import Card from './components/Card'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow,  faReddit,
  faTumblr,
  faGithub,
  faPinterest} from '@fortawesome/free-brands-svg-icons';
;


const cards = [ {points:3000, icon: faInstagram  ,title: "Points"},
{points:1000, icon: faReddit,title: "Diamond"}, {points:3000, icon: faInstagram  ,title: "Points"},{points:800, icon:faStackOverflow  ,title: "Shakas"},
{points:300, icon:  faTumblr ,title: "Lightnings"},{points:300, icon: faGithub ,title: "hub"}, {points:3000, icon: faInstagram  ,title: "Points"},{points:300, icon:  faPinterest ,title: "pint"},{points:300, icon:  faPinterest ,title: "pint"},{points:300, icon:  faPinterest ,title: "pint"},{points:300, icon:  faPinterest ,title: "pint"},{points:300, icon:  faTumblr ,title: "Lightnings"},{points:300, icon:  faTumblr ,title: "Lightnings"}
]



export default function App() {
  return (
    <div className='App'>
    
      {cards.map((card,i)=>(
         <Card info={card} key={i}/>
      ))}
    </div>
  )
}

