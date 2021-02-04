import React, { useState } from 'react';
import { Button, Divider, Link, TextField, Typography } from '@material-ui/core';
import { LoginTitleForm } from '../index';
import { ButtonGrid, ContainerMain, DividerElement, DividirGrid, SignInButton, SignInTextField, SingInLink, TextFieldBody } from './styles';

type StateProps = {
    errorMessage: string | null,
}

const LoginSingIn: React.FC = () => {
    const [state] = useState({
        errorMessage: '',
    });

    const submitForm = () => {

    }


    const textFieldGrid = (): JSX.Element => (
        <form onSubmit={() => submitForm()}>
            <TextFieldBody>
                <SignInTextField>
                    <TextField 
                        error={state.errorMessage == null} 
                        label="User name or Email" />
                </SignInTextField>
                <SignInTextField>
                    <TextField label="Password" type="password"/>
                </SignInTextField>
            </TextFieldBody>
            <SingInLink href="#">
                <Typography>Forgot password?</Typography>
            </SingInLink>
        </form>
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