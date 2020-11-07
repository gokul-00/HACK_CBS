import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { Container } from '@material-ui/core'

import Home from './components/index.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Route path='/' component={Home}/>
      </Container>
    </Router>
  );
}

export default App;