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

                    <Tile>
                        <TileBackground source={require('../../common/Images/tileBackground.jpg')}>
                            <TileTitle>Clasic CountDown</TileTitle>

                        </TileBackground>
                    </Tile>
                </ContentWrapper>

            </BackGroundImage>
        </Wrapper>
    );
};

