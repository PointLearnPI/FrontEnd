import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import '../../../paginas/home/Home'
import {toast} from 'react-toastify';

function Navbar() {
    return (
        <>
         
            <AppBar className='corMenu' position="relative">
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

