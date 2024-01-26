import React from 'react';
import { Wrapper, BackGroundImage, Title, ContentWrapper, Tile, TileTitle, TileBackground } from './styledHome';

export const Home = () => {
    return (
        <Wrapper>
            <BackGroundImage source={require('../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>
                        Chose your training
                    </Title>

                    <Tile title="Classic Countdown">

                    </Tile>
                </ContentWrapper>

            </BackGroundImage>
        </Wrapper>
    );
};

