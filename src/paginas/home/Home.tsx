import React, { useEffect,  } from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ListarProduto from '../../componentes/produtos/listarProdutos/ListarProduto';

function Home() {

    let history = useHistory();

    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
          
        
    return (
        <>

            <Grid container className='background' justifyContent="center" alignItems="center" >

                <Grid alignItems="center" item xs={12}>
                    <Box justifyContent="center">
                    </Box>
                </Grid>
                </Grid>
                <Grid className='backgroundColor' container direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid className='marginHome' alignItems="flex-start" item xs={5}>
                        <Box>
                            <p className='bold'>
                                Missão
                            </p>
                            </Box>
                            <Grid alignItems="flex-start" item xs={5}>
                                <Box>
                                <p className='textoMissao'>
                                Preparar e apoiar jovens e adultos nas suas carreiras, dando acesso conteúdos básicos e 
profissionalizantes, e ao promovendo o cuidado ambiental, buscando reduzir a degradação do meio ambiente.
                                </p>
                                </Box>
                            </Grid>
                        
                    </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid className='ods4' alignItems="center" item xs={5}>
                        <Box>
                            <p className='bold'>
                                ODS4
                            </p>
                            </Box>
                            <Grid alignItems="center" item xs={5}>
                                <Box>
                                <p className='textoODS4'>
                                Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos
                                </p>
                                </Box>
                            </Grid>
                            </Grid>
                </Grid>
                <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
                <Grid className='pptu' alignItems="flex-start" item xs={5}>
                        <Box>
                            <p>
                                Política de privacidade
                            </p>
                            </Box>
                            <Grid alignItems="center" item xs={5}>
                                <Box>
                                <p>
                                Termos de uso 
                                </p>
                                </Box>
                            </Grid>
                            </Grid>

                </Grid>
            

        </>
    );
}

export default Home;