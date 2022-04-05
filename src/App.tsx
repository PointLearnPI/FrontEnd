import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Carrossel from './paginas/sobrenos/SobreNos';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroCategoria from './componentes/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './componentes/categorias/deletarCategoria/deletarCategoria';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/sobrenos'>
            <Carrossel/>
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario/>
          </Route>

          <Route exact path='/formularioCategoria'>
            <CadastroCategoria />
          </Route>

          <Route exact path='/formularioCategoria/:id'>
            <CadastroCategoria />
          </Route>

          <Route path='/deletarCategoria/:id'>
            <DeletarCategoria />
          </Route>
        </div>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;