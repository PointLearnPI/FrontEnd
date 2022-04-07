import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../service/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListarProduto.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListarProduto() {

  const [produtos, setProdutos] = useState<Produto[]>([])

  let history = useHistory();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )
  

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado")
      history.push("/login")

    }
  }, [token])

  async function getProdutos() {
    await busca("/produto", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getProdutos()

  }, [produtos.length])

  return (
    <>
      {
        produtos.map(post => (
          <Box m={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Produtos
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.nomep}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.duracao}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.categoria?.descricaoc}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioProduto/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        Comprar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListarProduto;