import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { buscaId, post, put } from '../../../service/Service'
import Categoria from '../../../models/Categoria'
import "./CadastroCategoria.css"
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'

function CadastroCategoria() {

    let history = useHistory()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomec:'',
        descricaoc: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
             });
            history.push("/login")
        }
    }, [token])

    async function findById(id: string) {
        await buscaId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
            
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {

            try {
                setCategoria({
                    ...categoria,
                    produto:[{}]
                })

                await put('/categoria', categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })

                toast.success('Categoria atualizada com sucesso', {
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
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres', 
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
            }

        } else {

            try {
                await post(`/categoria`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                
                toast.success('Categoria cadastrada com sucesso', {
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
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres', 
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
                history.push("/formularioCategoria")
    
            }
        }
        
        back()

    }

    function back() {
        history.push('/categorias')
    }

    return (
        <Grid className='backgroundCadastar'>
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastrar categoria</Typography >
                <TextField className='cadastrarCategoria'
                value={categoria.nomec}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="nomec"
                    label="nome"
                    variant="outlined"
                    name="nomec"
                    margin="normal"
                    fullWidth
                    placeholder='Minímo de 5 caracteres'
                />

                    <TextField
                    value={categoria.descricaoc}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="descricaoc"
                    label="descricao"
                    variant="outlined"
                    name="descricaoc"
                    margin="normal"
                    fullWidth
                    placeholder='Minímo de 30 caracteres'
                />
                <Button type="submit" variant="contained" color="primary" className='botaoFinalizar'>
                    Finalizar
                </Button>
            </form>
        </Container>
        </Grid>
    )
}

export default CadastroCategoria;