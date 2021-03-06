import styled from 'styled-components'



export const ContainerMain = styled.div` 
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    @media(max-width: 800px){
        flex-direction: column;
        height: 100%;
    }

`;

export const ContainerCarrousel = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: #A9C5BA;
    @media(max-width: 650px){
        padding-bottom: 0px;
    }

`;

export const ContainerLogin = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;