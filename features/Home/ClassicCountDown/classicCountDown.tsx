import React from 'react';
import { BackGroundImage, ContentWrapper, Title, Wrapper } from './styledClasicCountDown';

export const ClassicCountDown = () => {
    return (
        <Wrapper>
            <BackGroundImage source={require('../../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>Siema</Title>
                </ContentWrapper>
            </BackGroundImage>

        </Wrapper>
    );
};

