import React from 'react';
import ListShoes from './components/products/ListShoes';
import ShoeDetail from './components/products/ShoeDetail';
import Index from './components/Index';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Returns from './components/account/Returns';
import Track from './components/account/Track';
import styled from 'styled-components';

const Header = styled.h1`
  margin-top: 4vh;
  font-weight: 150;
`

function App() {
  return (
    <Router>

        <div className="App">
          <Header className="App-header">
            <Link style={{textDecoration:'none', color:'black'}} to='/'>Golden Shoe</Link>
          </Header>
        </div>

        <Route path="/" exact component={Index} />
        <Route path="/shoes/" exact component={ListShoes} />
        <Route path="/shoe/:id(\d+)" exact component={ShoeDetail} /> 
        <Route path="/returns" exact component={Returns} /> 
        <Route path="/track/:id(\d+)" exact component={Track} /> 
    </Router>
  );
}

export default App;
