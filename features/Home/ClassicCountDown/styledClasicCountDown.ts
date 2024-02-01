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
`;

export const Title = styled.Text`
    font-size: 40px;
    color: ${({ theme }) => theme.color.fontMain};
`;

export const InputWrapper = styled.View`
    flex: 1;
    flex-wrap: wrap;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 800px;
    padding: 12px;
    background: ${({ theme }) => theme.color.fontMain};
    width: 64px;
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