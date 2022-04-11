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
        { img: "https://i.imgur.com/pWRhplZ.png" },/*Denise */
        { img: "https://i.imgur.com/2vgyhjM.png" },/*Domenica */
        { img: "https://i.imgur.com/KE47Zrt.png" },/*Edu */
        { img: "https://i.imgur.com/KLpFYyV.png" },/*Mayara */
        { img: "https://i.imgur.com/wzXq0Km.png" }, /*Natalia */
    ]
    return (

        <Grid container direction="row" alignItems="center" className="backgroundsn">

                 
            <Box  marginTop={20} marginLeft ={22}  marginRight={20} textAlign='left' >
                
            <img className="img"src="https://i.imgur.com/nPFr8Dl.png"  />

                <h1 className="fonttexto1"> Quem queremos atingir ?</h1>
                <p className="fonttexto2">
                    Nosso projeto se constitui em um e-commerce de cursos profissionalizantes para jovens de todas as regiões, pensamos em abordar assuntos e temas, cujo conhecimento são necessários em todas as áreas de atuação do mercado.
                    Por nos preocuparmos com a acessibilidade da educação, inicialmente iremos oferecer grande parte de forma gratuita enquanto os pagos serão a preço de custo.
                    Para o futuro iremos retirar totalmente os cursos pagos de nossa plataforma e o pagamento começará ser efetuado a partir de pontos vindos de ações sociais com parceria com os eco pontos.
                    Assim, o projeto final  será a conversão de reciclagem em cursos profissionalizantes.
                </p>
            </Box> 


            <Box  marginTop={20} marginLeft ={23}  marginRight={20} textAlign='left' >
                
            <h1 className="fonttexto1"> O que é Learn Point ?</h1>
            <p className="fonttexto2">
            A Learn Point é um e-commerce de cursos profissionalizantes para jovens de todas as regiões do Brasil com idade de 18 até 24 anos. 
            No brasil, mais de 31% da população dos jovens estão desempregados e sem nenhum tipo de instrução 
            para o mercado de trabalho e a Learn Point vem com o intuito de encontrar essas pessoas e preenche-las com as habilidades necessárias para atender as vagas de entrada no mercado de trabalho.
            </p>
            </Box>

            
            <Box  marginTop={20} marginLeft ={107}  marginRight={20} textAlign="left">
             
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