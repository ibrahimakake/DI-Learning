import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList';
import './App.css';

import Example1 from './Components/Example1';
import Example2 from './Components/Example2';
import Example3 from './Components/Example3';




function App() {
  const [responseData, setResponseData] = useState(null);

  async function fetchData() {
    const url = '	http://webhook.site/bdcd08da-7a1e-469c-b714-039f31ebe06d'
    const dataToSend = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        const data = await response.json();
      
        console.log('Response Data:', data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  }
  
  function HomeScreen() {
    return (
      <div>
        <h3>HomeScreen</h3>
      </div>
    );
  }
  function ProfilScreen() {
    return (
      <div>
        <h3>ProfilScreen</h3>
      </div>
    );
  }

  function ShopScreen() {
    throw new Error('An error has occurred');
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h2 style={{color:'blue'}}>Exercice 1</h2>
    
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink to="/home" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/profil" className="nav-link" activeClassName="active">
              Profil
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/shop" className="nav-link" activeClassName="active">
              Shop
            </NavLink>
          </Nav.Item>
        </Nav>

        <Routes>
          <Route
            path="/home"
            element={<ErrorBoundary><HomeScreen /></ErrorBoundary>}
          />
          <Route
            path="/profil"
            element={<ErrorBoundary><ProfilScreen /></ErrorBoundary>}
          />
          <Route
            path="/shop"
            element={<ErrorBoundary><ShopScreen /></ErrorBoundary>}
          />
        </Routes>
        <br/>
        <h2 style={{color:'red'}}> Exercice 2 </h2>
          <PostList/>
          <br/>
          <h2 style={{color:'brown'}}>Exercice 3</h2>
          <br/>
           <Example1/>

        
          <Example2/>
          <br/>
          <h2 style={{color:'green'}}>Exercice 4</h2>

      
          <Example3/>
  
         <br/>

         <button onClick={fetchData}>Fetch Data</button>
      </div>
    </BrowserRouter>
  );
}

export default App
