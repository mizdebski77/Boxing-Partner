import React from 'react';
import { BackGroundImage, ContentWrapper, InputWrapper, NumberOfRounds, Title, Wrapper, Button, ButtonText, InputContent, InputTitle } from './styledClasicCountDown';

export const ClassicCountDown = () => {
    return (
        <Wrapper>
            <BackGroundImage source={require('../../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>Boxing Timer</Title>

                    <InputWrapper>
                        <InputTitle>Number of rounds</InputTitle>
                        <InputContent>
                            <Button>
                                <ButtonText>-</ButtonText>
                            </Button>
                            <NumberOfRounds>1</NumberOfRounds>
                            <Button>
                                <ButtonText>+</ButtonText>
                            </Button>
                        </InputContent>

                        <InputTitle>Number of rounds</InputTitle>
                        <InputContent>
                            <Button>
                                <ButtonText>-</ButtonText>
                            </Button>
                            <NumberOfRounds>1</NumberOfRounds>
                            <Button>
                                <ButtonText>+</ButtonText>
                            </Button>
                        </InputContent>

                        <InputTitle>Number of rounds</InputTitle>
                        <InputContent>
                            <Button>
                                <ButtonText>-</ButtonText>
                            </Button>
                            <NumberOfRounds>1</NumberOfRounds>
                            <Button>
                                <ButtonText>+</ButtonText>
                            </Button>
                        </InputContent>
                    </InputWrapper>
                </ContentWrapper>
            </BackGroundImage>
        </Wrapper>
    );
};

