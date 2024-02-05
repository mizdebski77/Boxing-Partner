import styled from "styled-components/native";

export const Wrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const BackGroundImage = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: start; 
    align-items: center; 
`;

export const ContentWrapper = styled.View`
    padding: 80px 0;
    flex: 1;
    gap: 40px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const InputWrapper = styled.View`
    flex: 1;
    align-items: start;
`;

export const InputTitle = styled.Text`
    color: ${({ theme }) => theme.color.fontSecond};
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
`;

export const InputContent = styled.View`
    padding: 0 40px;
    width: 100%;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    background: ${({ theme }) => theme.color.fontMain};
    border-radius: 300px;
    max-width: 64px;
    max-height: 64px;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: white;
`;

export const NumberOfRounds = styled.Text`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 40px;
`;

export const StartButton = styled.TouchableOpacity`
    background: ${({ theme }) => theme.color.fontMain};
    padding: 12px 80px;
    border-radius: 20px;
`;

export const StartButtonText = styled.Text`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 20px;
`;