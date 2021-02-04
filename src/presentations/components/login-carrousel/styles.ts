import styled from 'styled-components';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const CarrouselContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: transparent;
    padding: 48px;

    .MuiMobileStepper-dot{
            background-color: white;
            opacity: 0.5;
    }
    .MuiMobileStepper-dotActive{
            background-color: white;
            opacity: 1;
            padding: 4px 8px 4px 8px;
        }

    .CardMobileItem{
        display: flex;
        flex-direction: column;
    }

    .CardMobileSlider{
        display: flex;
        background: none;
        justify-content: center;

        
    }
    
`


export const ItensCarrousel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleCarrousel = styled(Typography)`  
        color: white;
`;

export const DescriptionCarrousel = styled(Typography)`  
        color: white;

`;