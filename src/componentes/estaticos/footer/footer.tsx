import React from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "blue", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='titulo1'>Acompanhe-nos nas redes sociais </Typography>
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
                    <Box style={{ backgroundColor: "navy", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='titulo1' >© 2022 Learnpoint:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='titulo1' align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </> 
        )
}

export default Footer;