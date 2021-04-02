import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background-color: #404040;
    width: 100vw;
    display: flex;
    justify-content: space-around;
`;

const Section = styled.section`
    color: white;
    padding: 1.5em;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 1.4em;
    margin-bottom: .4em;
`;

export const Footer = () : JSX.Element => {
    return (
        <Wrapper>
            <Section>
                <Title>O Mnie</Title>
            </Section>

            <Section>
                <Title>Kontakt</Title>
                <address>
                    <p>
                        Łukasz Cieśla<br/>
                        38-305 Lipinki 626<br/>
                        Tel.: 661 233 757
                    </p>
                </address>
            </Section>

            <Section>
                <Title>Nawigacja</Title>
            </Section>
        </Wrapper>
    );
}