import React, { useState } from 'react';
import { Link, SvgIcon, TextField, Typography } from '@material-ui/core';
import { ButtonGrid, ContainerMain, CreateAccountGrid, DividerElement, DividirGrid, FormBody, GoogleButton, SignInButton, SignInTextField, SingInLink, TextFieldBody } from './styles';
import { Validation } from 'validation/protocols/validations';

const google = require("../../../assets/files/Google__G__Logo.svg");

type Props = {
    validation: Validation;
}
const LoginSingIn: React.FC<Props> = ({ validation }: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState<String | null>(null);
    const [passwordError, setPasswordError] = useState<String | null>(null);

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ "email": email, "password": password });
        const errorEmail = validation.validate('Email', email);
        if (errorEmail != null) {
            console.log(errorEmail);
            setEmailError(errorEmail);
        }
        const errorPassword = validation.validate('Password', password);
        if (errorPassword != null) {
            setPasswordError(errorPassword);
        }
    }

    const handleEmail = (value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (emailError != null) {
            setEmailError(null);
        }
        setEmail(value.target.value)
    }

    const handlePassword = (value: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (passwordError != null) {
            setPasswordError(null);
        }
        setPassword(value.target.value)
    }
    const textFieldGrid = (): JSX.Element => (
        <FormBody onSubmit={submitForm}>
            <TextFieldBody>
                <SignInTextField>
                    <TextField
                        error={emailError != null}
                        helperText={emailError != null ? emailError : ''}
                        label="User name or Email"
                        value={email}
                        onChange={handleEmail}
                    />

                </SignInTextField>
                <SignInTextField>
                    <TextField
                        error={passwordError != null}
                        helperText={passwordError != null ? passwordError : ''}
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </SignInTextField>
            </TextFieldBody>
            <SingInLink href="#">
                <Typography>Forgot password?</Typography>
            </SingInLink>
            <ButtonGrid>
                <SignInButton variant="contained" type={"submit"}>
                    <Typography>
                        Sign In
                </Typography>
                </SignInButton>
            </ButtonGrid>
        </FormBody>
    )

    const dividirGrid = (): JSX.Element =>
    (
        <DividirGrid>
            <DividerElement />
            <Typography>Or</Typography>
            <DividerElement />
        </DividirGrid>
    )

    const googleIcon = () => (
        <SvgIcon component={google} viewBox="0 0 600 476.6" /> 
    )

    return (
        <ContainerMain>
            {textFieldGrid()}
            {dividirGrid()}
            <ButtonGrid>
                <GoogleButton 
                    variant="contained"
                    startIcon={googleIcon}
                    >
                    <Typography>
                        Sign In with Google
                </Typography>
                </GoogleButton>
            </ButtonGrid>
            <CreateAccountGrid>
                <Typography>
                    New Invision? 
                </Typography>
                <Link href="#">
                    <Typography> Create Account</Typography>
                </Link>
            </CreateAccountGrid>
        </ContainerMain>
    )
}

export default LoginSingIn;