import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import { LoginCarrousel, LoginHeader } from '../../components';
import { ContainerCarrousel, ContainerLogin, ContainerMain } from './styles';

import GlobalStyle from '../../../styles/global';

const Login: React.FC = () => {

    return (
        <>
            <ContainerMain container xs={12}>
                <ContainerCarrousel item xs={6} >
                    <LoginCarrousel />
                </ContainerCarrousel>
                <ContainerLogin item xs={6}>
                    <LoginHeader />
                </ContainerLogin>
            </ContainerMain>
            <GlobalStyle />
        </>

    )
}

export default Login;