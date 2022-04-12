import React from 'react';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Carrossel from './paginas/sobrenos/SobreNos';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroCategoria from './componentes/categorias/cadastroCategoria/CadastroCategoria';
import CadastroProduto from './componentes/produtos/cadastrarProdutos/CadastroProduto';
import DeletarCategoria from './componentes/categorias/deletarCategoria/DeletarCategoria';
import ListaCategoria from './componentes/categorias/listaCategoria/ListaCategoria';
import ListarProduto from './componentes/produtos/listarProdutos/ListarProduto';
import DeletarProduto from './componentes/produtos/deletarProdutos/DeletarProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Home />
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

          <Route exact path='/categorias'>
            <ListaCategoria />
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

          <Route exact path='/produtos'>
            <ListarProduto />
          </Route>

          <Route exact path='/formularioProduto'>
            <CadastroProduto />
          </Route>

          <Route exact path='/formularioProduto/:id'>
            <CadastroProduto />
          </Route>

          <Route path='/deletarProduto/:id'>
            <DeletarProduto />
          </Route>
        </div>

      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;