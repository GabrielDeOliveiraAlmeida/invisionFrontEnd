import React from 'react';
import { LoginCarrousel, LoginHeader, LoginSingIn  } from '../../components';
import { ContainerCarrousel, ContainerLogin, ContainerMain } from './styles';

import GlobalStyle from '../../../styles/global';

const Login: React.FC = () => {

    return (
        <>
            <ContainerMain>
                <ContainerCarrousel>
                    <LoginCarrousel />
                </ContainerCarrousel>
                <ContainerLogin >
                    <LoginHeader />
                    <LoginSingIn />
                </ContainerLogin>
            </ContainerMain>
            <GlobalStyle />
        </>
    )
}

export default Login;