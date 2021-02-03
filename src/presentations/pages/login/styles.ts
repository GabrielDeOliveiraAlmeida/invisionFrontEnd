import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components'



export const ContainerMain = styled(Grid)` 
    height: 100vh;
    width: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    @media(max-width: 650px){
        flex-direction: column;
    }

`;

export const ContainerCarrousel = styled(Grid)` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20vh;
    background-color: #A9C5BA;

`;

export const ContainerLogin = styled(Grid)` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20vh;

`;