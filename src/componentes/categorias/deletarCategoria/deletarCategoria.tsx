import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { buscaId, deleteId } from '../../../service/Service';
import "./DeletarCategoria.css"
import { toast } from 'react-toastify';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';


function DeletarCategoria() {

    let history = useHistory();

    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    const [categorias, setCategorias] = useState<Categoria>()

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

    useEffect(() => {
        if (id !== '') {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/categoria/${id}`, setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function sim() {
        history.push('/categorias')

        try {
            await deleteId(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            
            
            toast.success('Categoria deletada com sucesso', {
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
            toast.error('Erro ao deletar', {
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

    function nao() {
        history.push('/categorias')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a Categoria:
                            </Typography>
                            <Typography color="textSecondary">
                                { categorias?.descricaoc }
                            </Typography>
                        </Box>
                    </CardContent>

                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>

                </Card>
            </Box>
        </>
    )
}

export default DeletarCategoria