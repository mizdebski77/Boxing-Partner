import React from 'react';
import { Wrapper, BackGroundImage, Title, ContentWrapper, Tile, TileTitle, TileBackground, BackButton, BackbuttonText, } from './styledHome';
import { tiles } from './tilesTitle';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../core/types';

export const Home = () => {

    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <Wrapper>
            <BackGroundImage source={require('../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>
                        Chose your training
                    </Title>
                    {tiles.map((tile, index) => (
                        <Tile key={index} onPress={() => navigate(tile.link as keyof RootStackParamList)}>
                            <TileBackground source={tile.img} >
                                <TileTitle>{tile.text}</TileTitle>
                            </TileBackground>
                        </Tile>
                    ))}
                </ContentWrapper>

                <BackButton onPress={() => navigate('Welcome')}>
                    <BackbuttonText>Back</BackbuttonText>
                </BackButton>
            </BackGroundImage>
        </Wrapper >
    );
};

