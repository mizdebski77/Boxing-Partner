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
    flex: 1;
    gap: 40px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.color.fontMain};
    font-size: 40px;
    text-align: center;
    font-weight: normal;
    margin-bottom: 20px;
`;

export const Tile = styled.TouchableOpacity`
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.color.fontSecond};
    overflow: hidden;
`;

export const TileTitle = styled.Text`
    color: ${({ theme }) => theme.color.fontSecond};
    font-size: 32px;
    text-align: center;
    text-transform: capitalize;
    font-weight: normal;
    background: rgba(164, 30, 32, 0.7);
`;

export const TileBackground = styled.ImageBackground`
    padding: 44px 0px;
`;