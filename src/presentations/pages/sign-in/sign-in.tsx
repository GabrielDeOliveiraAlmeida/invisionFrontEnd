import React, {memo} from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';


const SingIn: React.FC = () => {

    return (
        <Grid container>
             <TextField label="User name or Email" />
             <TextField label="Password" />
        </Grid>
    )
}

export default memo(SingIn);