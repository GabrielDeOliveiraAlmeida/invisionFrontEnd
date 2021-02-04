import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import styled from 'styled-components'

export const ContainerMain = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 24px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const SignInButton = styled(Button)` 
    &.MuiButton-contained{
        background-color: #707070;
        border-radius: 100px;
    }
    p {
        color: white;
        font-size: 16px;

    }
`;

export const SignInTextField = styled(TextField)` 

`;

export const TextFieldBody = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 48px;
    width: 100%;
`;