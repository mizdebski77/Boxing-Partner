import React from 'react';
import { BackGroundImage, ContentWrapper, InputWrapper, NumberOfRounds, Title, Wrapper, Button, ButtonText } from './styledClasicCountDown';

export const ClassicCountDown = () => {
    return (
        <Wrapper>
            <BackGroundImage source={require('../../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>Boxing Timer</Title>

                    <InputWrapper>
                        <Button>
                            <ButtonText>-</ButtonText>
                        </Button>
                        <NumberOfRounds>1</NumberOfRounds>
                        <Button>
                            <ButtonText>+</ButtonText>
                        </Button>

                    </InputWrapper>
                </ContentWrapper>
            </BackGroundImage>
        </Wrapper>
    );
};

