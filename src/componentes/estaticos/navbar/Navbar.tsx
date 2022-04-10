import React from 'react';
import { AppBar, Toolbar, Typography, Box, Menu, Button } from '@material-ui/core';
import '../navbar/Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import '../../../paginas/home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';



function Navbar() {

    const dispatch = useDispatch()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let history = useHistory();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', 
        {
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

    return (
        <>
            <AppBar className='corMenu' position="absolute">
                <Toolbar variant="regular">

                    <Box style={{ cursor: "pointer" }} >
                        <Link to="/home">
                            <img className='logo' src="https://i.imgur.com/2OEcM9Y.png" alt="" />
                        </Link>
                    </Box>


                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Link className='link' to="/produtos">Cursos  </Link>
                        </Typography>
                    </Box>
                    <Typography variant="h6" className='barraNavbar'>
                        |
                    </Typography>


                    <Box mx={2} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Link className='link' to="/sobrenos"> Sobre-nós </Link>
                        </Typography>
                    </Box>
                    <Typography variant="h6" className='barraNavbar'>
                        |
                    </Typography>

                    <div>
                        <Button className='maisNavbar'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'false' : undefined}
                            onClick={handleClick}
                        >
                            Administrativo
                        </Button>
                        <Menu className='dentroMenu'
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >


                            <MenuItem onClick={handleClose}>
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        <Link className='linkMenu' to="/formularioProduto"> Cadastrar cursos </Link>
                                    </Typography>
                                </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        <Link className='linkMenu' to="/formularioCategoria">Cadastrar categoria </Link>
                                    </Typography>
                                </Box>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        <Link className='linkMenu' to="/categorias"> Categoria </Link>
                                    </Typography>
                                </Box>
                            </MenuItem>
                        </Menu>
                    </div>

                    <Box mx={2} style={{ cursor: "pointer" }}  onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            <Link className='link' to="/login">Sair</Link>
                        </Typography>
                    </Box>

                    <Box mx={2} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit">
                            <Link className='link' to="/login">Entrar</Link>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;