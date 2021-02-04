import Grid from '@material-ui/core/Grid/Grid';
import styled from 'styled-components'

export const HeaderStyled = styled(Grid)` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 24px 0px 24px;
    p { 
        font: Muli;
        font-size: 30px;
        color: #707070;
    }

    @media(max-width: 800px){
        p { 
        font-size: 24px;
        }
    }


`;