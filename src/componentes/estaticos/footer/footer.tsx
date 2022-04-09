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
    return (
        <>
            <Grid className='footer' container direction="row" >
                    <Box className='textoFooter' style={{ height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle1" align="center" gutterBottom className='titulo1'>© 2022 Learnpoint. Todos os direitos reservados.</Typography>
                        </Box>
                        <Box>
                        <Box className='logosFooter' display="flex">
                            <a href="https://instagram.com" target="_blank">
                                <InstagramIcon className='logos' />
                            </a>
                            <a href="https://github.com/PointLearnPI" target="_blank">
                                <GithubIcon className='logos' />
                            </a>
        
                        </Box>
                        </Box>
                    </Box>
                </Grid>
        </> 
        )
}

export default Footer;