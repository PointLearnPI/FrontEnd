import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProduto.css';
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import useLocalStorage from 'react-use-localstorage';

import { busca, buscaId, post, put } from '../../../service/Service';
import Produto from '../../../models/Produto';

function CadastroProduto() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            nomec: '',
            descricaoc: ''
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nomep: '',
        descricao: '',
        preco: 0,
        duracao: 0,
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca('/categoria', setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put('/produtos', produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto Atualizado');
        } else {
            post('/produto', produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        back()

    }

    function back() {
        history.push('/produtos')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de produtos</Typography>
                <TextField value={produto.nomep} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                id="nomep" 
                label="Nome" 
                variant="outlined" 
                name="nomep" 
                margin="normal" 
                fullWidth />

                <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                id="descricao" 
                label="Descrição" 
                name="descricao" 
                variant="outlined" 
                margin="normal" 
                fullWidth />

                <TextField value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                id="preco" 
                label="Preço" 
                variant="outlined" 
                name="preco" 
                margin="normal" 
                fullWidth />

                <TextField value={produto.duracao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} 
                id="duracao" 
                label="Duração" 
                name="duracao" 
                variant="outlined" 
                margin="normal" 
                fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label"> Categoria </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            categorias.map(categoria => (
                                <MenuItem value={categoria.id}>{categoria.nomec}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma categoria para prodtos</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroProduto;