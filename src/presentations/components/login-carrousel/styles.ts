import styled from 'styled-components';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export const CarrouselContainer = styled(Grid)`

    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 450px;
    background-color: transparent;

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


export const ItensCarrousel = styled(Grid) ` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleCarrousel = styled(Typography) `  
        color: white;
`;

export const DescriptionCarrousel = styled(Typography) `  
        color: white;


`;