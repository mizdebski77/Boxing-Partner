import { ImageBackground } from "react-native";
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
    justify-content: flex-end; 
    align-items: center; 
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 52px;
    text-align: center;
    font-weight: bold;
`;

export const TitleSpan = styled.Text`
    color: ${({ theme }) => theme.color.fontSecond};

`;

export const Caption = styled.Text`
    font-size: 28px;
    color: ${({ theme }) => theme.color.fontSecond};
    margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    border-radius: 20px;
    padding: 12px 10px;
    background: ${({ theme }) => theme.color.fontMain};
    margin-bottom: 80px;
`;

export const ButtonText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: white;
`;

