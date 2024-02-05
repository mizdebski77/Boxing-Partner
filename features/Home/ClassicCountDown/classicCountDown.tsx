import React, { useState } from 'react';
import { BackGroundImage, ContentWrapper, InputWrapper, NumberOfRounds, Title, Wrapper, Button, ButtonText, InputContent, InputTitle, StartButton, StartButtonText, InputContainer } from './styledClasicCountDown';

export const ClassicCountDown = () => {

    const [rounds, setRounds] = useState(1);
    const [roundLenght, seRoundtLenght] = useState('00:00');
    const [breakLenght, seBreaktLenght] = useState('00:00');

    const addRound = () => {
        setRounds(rounds + 1)
    };

    const removeRound = () => {
        setRounds(rounds - 1)
    };

    const addSeconds = () => {
        const currentSeconds = parseInt(roundLenght.split(':')[1], 10);
        const newSeconds = currentSeconds + 5;
        const newLenght = `00:${newSeconds < 10 ? '0' : ''}${newSeconds}`;
        seRoundtLenght(newLenght);
    };

    const removeSeconds = () => {
        const currentSeconds = parseInt(roundLenght.split(':')[1], 10);
        const newSeconds = Math.max(currentSeconds - 5, 0);
        const newLenght = `00:${newSeconds < 10 ? '0' : ''}${newSeconds}`;
        seRoundtLenght(newLenght);
    };


    return (
        <Wrapper>
            <BackGroundImage source={require('../../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>Boxing Timer</Title>

                    <InputWrapper>
                        <InputContainer>
                            <InputTitle>Number of rounds</InputTitle>
                            <InputContent>
                                <Button onPress={removeRound} disabled={rounds === 1}>
                                    <ButtonText>-</ButtonText>
                                </Button>
                                <NumberOfRounds>{rounds}</NumberOfRounds>

                                <Button onPress={addRound}>
                                    <ButtonText >+</ButtonText>
                                </Button>
                            </InputContent>
                        </InputContainer>


                        <InputContainer>

                            <InputTitle>Round Time</InputTitle>
                            <InputContent>
                                <Button onPress={removeSeconds}>
                                    <ButtonText >-</ButtonText>
                                </Button>
                                <NumberOfRounds>{roundLenght}</NumberOfRounds>
                                <Button onPress={addSeconds}>
                                    <ButtonText >+</ButtonText>
                                </Button>
                            </InputContent>
                        </InputContainer>


                        <InputContainer>
                            <InputTitle>Round Time</InputTitle>
                            <InputContent>
                                <Button onPress={removeSeconds}>
                                    <ButtonText >-</ButtonText>
                                </Button>
                                <NumberOfRounds>{roundLenght}</NumberOfRounds>
                                <Button onPress={addSeconds}>
                                    <ButtonText >+</ButtonText>
                                </Button>
                            </InputContent>
                        </InputContainer>

                    </InputWrapper>

                    <StartButton>
                        <StartButtonText> Start Training</StartButtonText>
                    </StartButton>
                </ContentWrapper>
            </BackGroundImage>
        </Wrapper>
    );
};

