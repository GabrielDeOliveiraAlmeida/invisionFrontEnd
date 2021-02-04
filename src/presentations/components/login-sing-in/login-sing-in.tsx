import React from 'react';
import { Button, Link, TextField, Typography } from '@material-ui/core';
import { LoginTitleForm } from '../index';
import { ContainerMain, SignInButton, SignInTextField, TextFieldBody } from './styles';


const LoginSingIn: React.FC = () => {

    return (
        <ContainerMain>
            <TextFieldBody>
                <SignInTextField label="User name or Email" />
                <SignInTextField label="Password" />
            </TextFieldBody>
            <Link href="#">
                <Typography>Forgot password?</Typography>
            </Link>
            <SignInButton variant="contained">
                <Typography>
                    Sign In
                </Typography>
            </SignInButton>
        </ContainerMain>
    )
}

export default LoginSingIn;