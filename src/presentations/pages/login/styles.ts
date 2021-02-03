import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components'



export const ContainerMain = styled.div` 
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    @media(max-width: 650px){
        flex-direction: column;
        height: 100%;
        width: 100vh;
    }

`;

export const ContainerCarrousel = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20vh;
    background-color: #A9C5BA;
    width: 100%;

`;

export const ContainerLogin = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20vh;
    width: 100%;
`;