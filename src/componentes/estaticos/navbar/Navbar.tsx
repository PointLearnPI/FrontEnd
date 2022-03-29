import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import '../../../paginas/home/Home'

function Navbar() {
    return (
        <>
            <AppBar className='corMenu' position="relative">
                <Toolbar variant="regular">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            LearnPointLogo
                        </Typography>
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