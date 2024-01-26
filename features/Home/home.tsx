import React from 'react';
import { Wrapper, BackGroundImage, TitleSpan, Title, Caption, ContentWrapper } from './styledHome';

export const Home = () => {
    return (
        <Wrapper>
            <BackGroundImage source={require('../../common/Images/background.jpg')} >
                <ContentWrapper>
                    <Title>
                        Chose your training
                    </Title>
                </ContentWrapper>

            </BackGroundImage>
        </Wrapper>
    );
};

