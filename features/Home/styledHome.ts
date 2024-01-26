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
    justify-content: start; 
    align-items: center; 
`;

export const ContentWrapper = styled.View`
    padding: 80px 0;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 32px;
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
