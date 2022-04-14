import React, { useState, useEffect } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { busca, post } from '../../../service/Service'
import './ListaCategoria.css'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'

function ListaCategoria() {

  let history = useHistory()

  const [categorias, setCategorias] = useState<Categoria[]>([])

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


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

  async function getCategorias() {
    await busca("/categoria", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategorias()
  }, [categorias.length])

  

  return (
    <>
      {
        categorias.map(categoria => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>

                <Typography color="textSecondary" gutterBottom>
                  Categorias
                </Typography>

                <Typography variant="h5" component="h2">
                  { categoria.nomec }
                </Typography>

              </CardContent>

              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5} >

                  <Link to={`/formularioCategoria/${ categoria.id }`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="botao2" size='small' color="primary" >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>

                  <Link to={`/deletarCategoria/${ categoria.id }`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary" className='botao'>
                        Deletar
                      </Button>
                    </Box>
                  </Link>

                </Box>
              </CardActions>

            </Card>
          </Box>
        ))}
    </>
  )
}

export default ListaCategoria