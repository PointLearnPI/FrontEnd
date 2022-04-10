import React, { useEffect } from 'react';
import { Grid, Box,} from '@material-ui/core';
import './SobreNos.css';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Carrossel() {
    let history = useHistory();

    
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    var items = [
        { img: "https://i.imgur.com/vgRpoWu.png" }, /*Alessandro */
        { img: "https://i.imgur.com/H8H64u4.png" },/*Bruno*/
        { img: "https://i.imgur.com/ZUjNJvH.png" },/*Denise */
        { img: "https://i.imgur.com/2vgyhjM.png" },/*Domenica */
        { img: "https://i.imgur.com/KE47Zrt.png" },/*Edu */
        { img: "https://i.imgur.com/KLpFYyV.png" },/*Mayara */
        { img: "https://i.imgur.com/wzXq0Km.png" }, /*Natalia */
    ]
    return (

        <Grid container direction="row" alignItems="center" className="backgroundsn">

                 
            <Box  marginTop={20} marginLeft ={25}  marginRight={20} textAlign='left' >
                
                <h1 className="fonttexto1"> Quem queremos atingir ?</h1>
                <p className="fonttexto2">
                    Nosso projeto se constitui em um e-commerce de cursos profissionalizantes para jovens de todas as regiões, pensamos em abordar assuntos e temas, cujo conhecimento são necessários em todas as áreas de atuação do mercado.
                    Por nos preocuparmos com a acessibilidade da educação, inicialmente iremos oferecer grande parte de forma gratuita enquanto os pagos serão a preço de custo.
                    Para o futuro iremos retirar totalmente os cursos pagos de nossa plataforma e o pagamento começará ser efetuado a partir de pontos vindos de ações sociais com parceria com os eco pontos.
                    Assim, o projeto final  será a conversão de reciclagem em cursos profissionalizantes.
                </p>
            </Box> 


            <Box  marginTop={20} marginLeft ={25}  marginRight={20} textAlign='left' >
                
            <h1 className="fonttexto1"> O que é Learn Point ?</h1>
            <p className="fonttexto2">
                Nosso projeto se constitui em um e-commerce de cursos profissionalizantes para jovens de todas as regiões, pensamos em abordar assuntos e temas, cujo conhecimento são necessários em todas as áreas de atuação do mercado.
                Por nos preocuparmos com a acessibilidade da educação, inicialmente iremos oferecer grande parte de forma gratuita enquanto os pagos serão a preço de custo.
                Para o futuro iremos retirar totalmente os cursos pagos de nossa plataforma e o pagamento começará ser efetuado a partir de pontos vindos de ações sociais com parceria com os eco pontos.
                Assim, o projeto final  será a conversão de reciclagem em cursos profissionalizantes.
            </p>
            </Box>

            
            <Box  marginTop={10} marginLeft ={105}  marginRight={20} textAlign="left">
             
            <h1 className="fonttexto1"> Integrantes:</h1>
           

            
            </Box >
           
            <Carousel  isRTL={false}>
                {
                     items.map(item => (
                        <>
                            <img src={item.img} alt="Item" />
                        </>
                    ))
                }
            </Carousel>
            
         

            

        </Grid>
    );
}






export default Carrossel;