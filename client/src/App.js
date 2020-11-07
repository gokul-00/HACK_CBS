import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import Home from './components/Home';
import NavBar from './components/NavBar/NavBar.jsx';
import Hospitals from './components/Hospitals/Hospitals';
import PlasmaDonor from './components/PlasmaDonor/PlasmaDonor';
import Register from './components/Hospitals/Register';
import PlasmaDonorRegister from './components/PlasmaDonor/register'

const App = () => {
  return (
    <Router>
      <Container>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/hospitals" component={Hospitals} />
        <Route exact path="/plasmaDonor" component={PlasmaDonor} />
        <Route exact path="/hospital/register" component={Register} />
        <Route exact path="/plasmaDonor/register" component={PlasmaDonorRegister} />
      </Container>
    </Router>
  );
}

export default App;