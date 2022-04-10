import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import '../navbar/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import '../../../paginas/home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';



function Navbar() {

    const dispatch = useDispatch()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let history = useHistory();
    return (
        <>
            <AppBar className='corMenu' position="relative">
                <Toolbar variant="regular">
                    <Box style={{ cursor: "pointer" }} >
                    <Link className='link' to="/home">
                        <img className='logo' src="https://i.imgur.com/wUJX9nV.jpg" alt="" />
                        </Link>
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

                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/formularioProduto"> Cadastrar produto </Link>
                            </Typography>
                        </Box>

                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/formularioCategoria"> Cadastrar Categoria </Link>
                            </Typography>
                        </Box>

                        <Box mx={2} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                <Link className='link' to="/categorias"> Categoria </Link>
                            </Typography>
                        </Box>

        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;