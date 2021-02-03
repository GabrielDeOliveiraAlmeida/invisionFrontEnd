import React, {memo} from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { ILoginTitleForm } from '../login-titleform/types';


const LoginTitleForm: React.FC<ILoginTitleForm> = (props: ILoginTitleForm) => {

    return (
        <Grid container>
             <TextField label="User name or Email" />
             <TextField label="Password" />
        </Grid>
    )
}

export default memo(LoginTitleForm);