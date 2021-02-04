import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components'

export const HeaderStyled = styled(Grid)` 
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 24px 24px 16px 24px;
    width: 100%;
    p { 
        font-size: 35px;
    }
`;