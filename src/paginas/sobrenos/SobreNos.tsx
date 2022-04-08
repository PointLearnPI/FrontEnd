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
        { img: "https://i.imgur.com/909XGXQ.jpg" }, /*Alessandro */
        { img: "https://i.imgur.com/o8mZwxl.png" },/*Bruno*/
        { img: "https://i.imgur.com/ZUjNJvH.png" },/*Denise */
        { img: "https://i.imgur.com/rXr2DDR.jpg" },/*Domenica */
        { img: "https://i.imgur.com/6rpIkSt.png" },/*Edu */
        { img: "https://i.imgur.com/HZwiY7W.jpg" },/*Mayara */
        { img: "https://i.imgur.com/ZUjNJvH.png" }, /*Natalia */
    ]
    return (

        <Grid container direction="row" alignItems="center">

            <Box className="textosn" marginTop={20} marginLeft ={20}  marginRight={20} textAlign='left' >
                <h3>Sobre nós:</h3>

                Nosso projeto se constitui em um e-commerce de cursos profissionalizantes para jovens de todas as regiões, pensamos em abordar assuntos e temas, cujo conhecimento são necessários em todas as áreas de atuação do mercado.
                Por nos preocuparmos com a acessibilidade da educação, inicialmente iremos oferecer grande parte de forma gratuita enquanto os pagos serão a preço de custo.
                Para o futuro iremos retirar totalmente os cursos pagos de nossa plataforma e o pagamento começará ser efetuado a partir de pontos vindos de ações sociais com parceria com os eco pontos.
                Assim, o projeto final  será a conversão de reciclagem em cursos profissionalizantes.

            </Box>



            
            <Box className="textosn" marginTop={10} marginLeft ={20}  marginRight={20} textAlign="left">
             
            <h3>Integrantes: </h3>
           

            
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