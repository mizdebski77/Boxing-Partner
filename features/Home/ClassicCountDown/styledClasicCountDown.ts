import styled from "styled-components/native";

export const Wrapper = styled.View`
    background: red;
    min-height: 100vh;
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
`; 