import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    var footerComponent

    if (token !== "") {
        footerComponent =
        <Grid className='footer' container direction="row" justifyContent="center" alignItems="center">
                <Grid className='footer' alignItems="center" item xs={12}>
                    <Box style={{ height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='titulo1'>Acompanhe as redes sociais do projeto </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://instagram.com" target="_blank">
                                <InstagramIcon className='logos' />
                            </a>
                            <a href="https://github.com/PointLearnPI" target="_blank">
                                <GithubIcon className='logos' />
                            </a>
        
                        </Box>
                    </Box>
                    <Box className='footer2' style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='titulo1' >Â© 2022 Learnpoint:</Typography>
                        </Box>
                        <Box>
                            <a className='site' target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom  align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    }
    return (
        <>
            { footerComponent }
        </> 
        )
}

export default Footer;