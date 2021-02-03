import React, {memo} from 'react';
import { Typography } from '@material-ui/core';
import { HeaderStyled } from './styles';
import { ILoginTitleForm } from './types';


const LoginTitleForm: React.FC<ILoginTitleForm> = (props: ILoginTitleForm) => {

    return (
        <HeaderStyled container>
            <Typography>{props.title}</Typography>
        </HeaderStyled>
    )
}

export default memo(LoginTitleForm);