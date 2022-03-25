import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <div>

        <Route>
        

        </Route>
     </div>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
