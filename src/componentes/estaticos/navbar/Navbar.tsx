import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import '../navbar/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import '../../../paginas/home/Home'
import {toast} from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();
    
    function goLogout(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar className='corMenu' position="relative">
                <Toolbar variant="regular">
                    <Box style={{ cursor: "pointer" }} >
                        <img className='logo' src="https://i.imgur.com/wUJX9nV.jpg" alt="" />
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/home"> Inicio </Link>
                            </Typography>
                        </Box>

                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/produtos">Cursos</Link>
                            </Typography>
                        </Box>

                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/sobrenos"> Sobre Nós </Link>
                            </Typography>
                        </Box>

                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/login"> Entrar </Link>
                            </Typography>
                        </Box>
                       
                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/login">Sair</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
             }
             return (
                 <>
                 {navbarComponent}
        </>
    )
}

export default Navbar;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
function addToken(arg0: string): any {
    throw new Error('Function not implemented.');
}

