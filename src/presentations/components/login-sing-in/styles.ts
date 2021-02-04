import Button from '@material-ui/core/Button/Button';
import Divider from '@material-ui/core/Divider/Divider';
import Link from '@material-ui/core/Link/Link';
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

export const SignInTextField = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 100%;
`;

export const TextFieldBody = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 0px 24px 0px 24px;
    width: 100%;
    max-width: 433px;
`;

export const SingInLink = styled(Link)` 
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 24px;
    width: 100%;
    max-width: 433px;

`;

export const ButtonGrid = styled.div` 
    display: flex;
    padding: 24px;
`;

export const DividirGrid = styled.div` 
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    max-width: 356px;
    p{ 
        padding: 0 16px 0 16px;
    }
`;

export const DividerElement = styled(Divider) ` 
    max-width: 150px;
    width: 40%;
`;