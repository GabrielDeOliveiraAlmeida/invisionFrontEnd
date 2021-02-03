import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import { MobileStepper, Typography } from '@material-ui/core';
import SwipeableViews from "react-swipeable-views";
import { ILoginCarrousel } from './types';
import { CarrouselContainer, DescriptionCarrousel, ItensCarrousel, TitleCarrousel } from './styles';


const Carrousel: React.FC = () => {

    const [index, setIndex] = useState<number>(0);

    const data: ILoginCarrousel[] = [
        {
            titulo: `Lorem, ipsum dolor`,
            descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo
            molestiae animi.`,
            index: 0
        },
        {
            titulo: `Lorem, ipsum dolor`,
            descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo
            molestiae animi.`,
            index: 1
        },
        {
            titulo: `Lorem, ipsum dolor`,
            descricao: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi quo
            molestiae animi.`,
            index: 2,
        }
    ];

    const handleStepChange = (step: number) => {
        setIndex(step);
    }

    return (
        <CarrouselContainer>
            <div className={'CardMobileItem'}>
                <SwipeableViews
                    index={index}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    animateTransitions
                >
                    {data.map(eachData => {
                        console.log(eachData);
                        return (
                            <ItensCarrousel key={eachData.index}>
                                <TitleCarrousel variant={'h6'}>{eachData.titulo}</TitleCarrousel>
                                <DescriptionCarrousel variant={'subtitle1'}>{eachData.descricao}</DescriptionCarrousel>
                            </ItensCarrousel>
                        )
                    })}
                </SwipeableViews>
            </div>
            <div>
                <MobileStepper
                    className={'CardMobileSlider'}
                    color={"white"}
                    variant="dots"
                    steps={data.length}
                    position="static"
                    activeStep={index}
                    backButton={() => { }}
                    nextButton={() => { }}
                />
            </div>
        </CarrouselContainer>
    )
}

export default Carrousel;