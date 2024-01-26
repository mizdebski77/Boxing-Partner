import React from 'react';
import { Wrapper, BackGroundImage, TitleSpan, Title, Caption, Button, ButtonText } from './styledWelcomePage';
import { useNavigation } from '@react-navigation/native';

export const WelcomePage = () => {
    const navigation = useNavigation();
    return (
        <Wrapper>
            <BackGroundImage source={require('../../common/Images/logoBackground.jpg')} >
                <Title>
                    Boxing <TitleSpan>Partner</TitleSpan>
                </Title>
                <Caption>
                    Boxing trainer on your phone
                </Caption>

                {/* <Button onPress={() => navigation.navigate('Home')}>
                    <ButtonText>Start your training</ButtonText>
                </Button> */}
            </BackGroundImage>
        </Wrapper>

    );
};