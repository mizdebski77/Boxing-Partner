import React from 'react';
import { Wrapper, BackGroundImage, Title, ContentWrapper, Tile, TileTitle, TileBackground, BackButton, BackbuttonText, } from './styledHome';
import { tiles } from './tilesTitle';
export const Home = () => {
    return (
        <Wrapper>
            <BackGroundImage source={require('../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>
                        Chose your training
                    </Title>
                    {tiles.map((tile, index) => (
                        <Tile key={index}>
                            <TileBackground source={tile.img} >
                                <TileTitle>{tile.text}</TileTitle>
                            </TileBackground>
                        </Tile>
                    ))}
                </ContentWrapper>

                <BackButton>
                    <BackbuttonText>Back</BackbuttonText>
                </BackButton>
            </BackGroundImage>
        </Wrapper >
    );
};

