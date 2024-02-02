import React, { useState } from 'react';
import { BackGroundImage, ContentWrapper, InputWrapper, NumberOfRounds, Title, Wrapper, Button, ButtonText, InputContent, InputTitle } from './styledClasicCountDown';

export const ClassicCountDown = () => {

    const [rounds, setRounds] = useState(1);

    const addRound = () => {
        setRounds(rounds + 1)
    };

    const removeRound = () => {
        setRounds(rounds - 1)
    };

    return (
        <Wrapper>
            <BackGroundImage source={require('../../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>Boxing Timer</Title>

                    <InputWrapper>
                        <InputTitle>Number of rounds</InputTitle>
                        <InputContent>
                            <Button onPress={removeRound} disabled = {rounds === 1}>
                                <ButtonText>-</ButtonText>
                            </Button>
                            <NumberOfRounds>{rounds}</NumberOfRounds>

                            <Button onPress={addRound}>
                                <ButtonText >+</ButtonText>
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

