import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history.push("/login")
  
      }
  }, [token])
    return (
        <>

            <Grid container className='background' justifyContent="center" alignItems="center" >

                <Grid alignItems="center" item xs={12}>
                    <Box justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <section className="caixa-search">
                            <input className='caixa-texto' type="text" name="" placeholder="Eu quero aprender..." />
                            <a className="botao-search" href="#">
                                <SearchIcon className="fa fa-plus-circle" />
                            </a>
                        </section>
                    </Box>
                </Grid>
                <Grid item xs={12} >

                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>

            </Grid>

        </>
    );
}

export default Home;