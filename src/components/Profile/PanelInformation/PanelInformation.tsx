import React from 'react'
import styled from 'styled-components'
import {Colors} from '../../../helpers/Colors'

const HeaderTitle = styled.h2`
    font-size: 1.4em;
    margin-top: 1em;
`;

const Section = styled.section`
    padding: 1em 0em;
    color: ${Colors.Gray};
`;

const SectionTitle = styled.h3`
    color: ${Colors.Silver};
    padding-bottom: .8em;
    font-size: 1.2em;
`;

const Attachment = styled.table`
    width: 100%;
    margin: .8em 0;
`;

const Row = styled.tr`
    background-color: #f5f7f9;
`;

const Column = styled.td`
    padding: 1em;
`;

const PanelInformation : React.FC = () => {
    return (
        <>
            <HeaderTitle>Panel information</HeaderTitle>
            <Section>
                <SectionTitle>Hourly fee</SectionTitle>
                <span>610$/hour (Negociated)</span>
            </Section>

            <Section>
                <SectionTitle>Terms & conditions</SectionTitle>
                <span>Monthly 10k$ retainer - see with Jeanny Smith</span>

                <Attachment>
                    <Row>
                        <Column>Attachment_lorem_ipsum25425.jpg</Column>
                    </Row>
                </Attachment>
            </Section>

            <HeaderTitle>Services & projects</HeaderTitle>
            <Section>
                <span>Corporate M&A and international acquisitions</span>
            </Section>

            <HeaderTitle>Internal correspondants</HeaderTitle>
        </>
    );
}
export default PanelInformation;