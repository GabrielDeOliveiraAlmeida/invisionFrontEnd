import React, {memo} from 'react';
import { Typography } from '@material-ui/core';
import { HeaderStyled } from './styles';


const LoginHeader: React.FC = () => {

    return (
        <HeaderStyled container>
            <Typography>Invision</Typography>
        </HeaderStyled>
    )
}

export default memo(LoginHeader);