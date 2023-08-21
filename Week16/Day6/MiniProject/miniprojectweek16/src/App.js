import {Routes,Route,Navigate} from 'react-router-dom'
import Ract from 'react';
import './App.css';
import Home from './Components/Home';

function App() {
return (
    <Routes>
      <Route path='/' element={< Navigate to='search/mountain'/>} />
      <Route path='search/:category' element={<Home />}/>
    </Routes>
  );
}

export default App;
