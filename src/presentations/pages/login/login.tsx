import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import { LoginCarrousel, LoginHeader, LoginSingIn, LoginTitleForm } from '../../components';
import { ContainerCarrousel, ContainerLogin, ContainerMain } from './styles';

import GlobalStyle from '../../../styles/global';

const Login: React.FC = () => {

    return (
        <>
            <ContainerMain>
                <ContainerCarrousel >
                    <LoginCarrousel />
                </ContainerCarrousel>
                <ContainerLogin >
                    <LoginHeader />
                    <LoginTitleForm title={'Welcome to Invision'} />
                    <LoginSingIn />
                </ContainerLogin>
            </ContainerMain>
            <GlobalStyle />
        </>

    )
}

export default Login;