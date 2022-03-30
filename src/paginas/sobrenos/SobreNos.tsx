import React from 'react';
import { Grid, Box, Typography, TextField, Button} from '@material-ui/core';
import './SobreNos.css';
import { Link } from 'react-router-dom';

function SobreNos() {
    return (
        
         <Grid  container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6}>
                    <Box className= "textosn" paddingX= {20}  textAlign='center' >
                    <h1>Sobre nós:</h1>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque rerum facilis perferendis, voluptates neque iste laborum iure commodi atque fugit. Quisquam dolorum eveniet molestias inventore iure. Repellat dignissimos ipsa minus!
                    </Box>
                
                </Grid>

                <Grid alignItems="center" item xs={6} className='contato'>
                <Box  paddingTop={20}  textAlign='center' >
                <form className="tminput">
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='texto1'>Envie uma pergunta ou sugestão:</Typography>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='email' label='email' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='Assunto' label='Assunto' variant='outlined'  name='Assunto' margin='normal' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Enviar
                                </Button>
                            </Link>
                        </Box>
                       
                    </form>
                    </Box>
            </Grid>
            </Grid>
            
           
        
    );
}


export default SobreNos;