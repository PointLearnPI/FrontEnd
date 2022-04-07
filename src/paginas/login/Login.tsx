import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken, addId } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {

    let history = useHistory();

    const dispatch = useDispatch()

    const [token, setToken] = useState('')
    
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nomeu: '',
            usuario: '',
            senha: '',
            token: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nomeu: '',
            usuario: '',
            senha: '',
            token: ''
        })

        useEffect(() => {
            if (token !== "") {
                dispatch(addToken(token))
                history.push('/home')
            }
        }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (respUserLogin.token !== "") {

            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))    
            history.push('/home')
        }
    }, [respUserLogin.token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Login efetuado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Erro ao logar', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    return (
        <Grid container className='backgroundLogin' justifyContent='center' alignItems='center'>
            <Grid alignItems='center'>
                <Grid alignItems="center" item xs={12}>
                    <Box justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Box paddingX={10} >
                            <div className='formularioEntrar'>
                                <form onSubmit={onSubmit} >

                                    <TextField className='formularioCadastro' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                                    <TextField className='formularioCadastro' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                                    <Box marginTop={2} textAlign='center'>

                                        <Button type='submit' variant='contained' color='primary'>
                                            Entrar
                                        </Button>
                                        </Box>
                                    <Box marginTop={1} textAlign='center'>
                                     <Link to='/cadastrousuario'>
                                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                                    </Link>
                                    </Box>
                                </form>

                                
                            </div>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Login;