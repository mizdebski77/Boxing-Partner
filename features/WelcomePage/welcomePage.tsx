import React from 'react';
import { Wrapper, BackGroundImage, TitleSpan, Title, Caption, Button, ButtonText } from './styledWelcomePage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../core/types';


export const WelcomePage = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    return (
        <Wrapper>
            <BackGroundImage source={require('../../common/Images/logoBackground.jpg')} >
                <Title>
                    Boxing <TitleSpan>Partner</TitleSpan>
                </Title>
                <Caption>
                    Boxing trainer on your phone
                </Caption>

                <Button onPress={() => navigate('Home')}>
                    <ButtonText>Start your training</ButtonText>
                </Button>
            </BackGroundImage>
        </Wrapper>

    );
};