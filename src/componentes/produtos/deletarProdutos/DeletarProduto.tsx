import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscaId, deleteId } from '../../../service/Service';
import './DeletarProduto.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarProduto() {

    let history = useHistory();

    const { id } = useParams<{id: string}>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    )

    const [produtos, setProdutos] = useState<Produto>()

    useEffect(() => {
        if (token == "") {
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

    useEffect(() =>{
        if(id !== ''){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/produto/${id}`, setProdutos, {
            headers: {
              'Authorization': token
            }
          })
        }

        async function sim() {
          history.push('/produtos')
  
          try {
              await deleteId(`/produto/${id}`, {
                  headers: {
                      'Authorization': token
                  }
              });
              
                toast.success('Produto deletado com sucesso', {
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
          history.push('/produtos')
      }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o produto:
              </Typography>
              <Typography color="textSecondary" >
              {produtos?.nomep}
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
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProduto;