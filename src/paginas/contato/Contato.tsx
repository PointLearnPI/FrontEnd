import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Contato.css';

function Contato() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid item xs={12} >
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolor amet praesentium placeat asperiores, adipisci enim tempora, ex, consequatur qui assumenda. Et in sint numquam, quis nulla possimus nihil nostrum.</Typography>
                </Grid>
                <Grid alignItems="center" container direction="row" justifyContent="center" item xs={12}>
                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='IMG' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>ALE</h3>
                                    <p> <a href="https://www.linkedin.com/in/alessandro-fonseca-95b99a22a/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='XXX' alt='foto' />

                                </Box>
                            </Box>
                        </Box>
                    </Box>


                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='XXX' alt='foto' />
                                </Box>
                                <Box className="back">
                                    <h3>BRUNO</h3>
                                    <p> <a href="https://www.linkedin.com/in/souzabrunord/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='XXX' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>DENISE</h3>
                                    <p> <a href="https://www.linkedin.com/in/denise-kelly-silva/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='XXX' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>DOMENICA</h3>
                                    <p> <a href="https://www.linkedin.com/in/domenicaaraujo/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">

                                    <img src='XXX' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>EDUARDO</h3>
                                    <p> <a href="https://www.linkedin.com/in/eduhmoura/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='XXX' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>MAYARA</h3>
                                    <p> <a href="https://www.linkedin.com/in/mayaraalmeida24/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="container">
                        <Box className="box">
                            <Box className="inner">
                                <Box className="front">
                                    <img src='XXX' alt='foto' />

                                </Box>
                                <Box className="back">
                                    <h3>NATALIA</h3>
                                    <p> <a href="https://www.linkedin.com/in/nataliadev/">Linkedin</a></p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        

        </>

    );
}

export default Contato;