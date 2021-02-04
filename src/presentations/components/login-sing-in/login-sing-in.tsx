import React from 'react';
import { Button, Divider, Link, TextField, Typography } from '@material-ui/core';
import { LoginTitleForm } from '../index';
import { ButtonGrid, ContainerMain, DividerElement, DividirGrid, SignInButton, SignInTextField, SingInLink, TextFieldBody } from './styles';


const LoginSingIn: React.FC = () => {


    const textFieldGrid = (): JSX.Element => (
        <>
            <TextFieldBody>
                <SignInTextField>
                    <TextField label="User name or Email" />
                </SignInTextField>
                <SignInTextField>
                    <TextField label="Password" />
                </SignInTextField>
            </TextFieldBody>
            <SingInLink href="#">
                <Typography>Forgot password?</Typography>
            </SingInLink>
        </>
    )

    const dividirGrid = ( ): JSX.Element  => 
    (
        <DividirGrid>
            <DividerElement/>
             <Typography>Or</Typography>
            <DividerElement/>
        </DividirGrid> 
    )

    
    return (
        <ContainerMain>
            {textFieldGrid()}
            <ButtonGrid>
                <SignInButton variant="contained">
                    <Typography>
                        Sign In
                </Typography>
                </SignInButton>
            </ButtonGrid>
            {dividirGrid()}
        </ContainerMain>
    )
}

export default LoginSingIn;