import styled from 'styled-components';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const CarrouselContainer = styled.div`

    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    background-color: transparent;
    min-height: 500px;
    align-items: stretch;
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
        padding: 0px 24px 0px 24px;
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