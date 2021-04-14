import React from 'react'
import styled from 'styled-components'
import {Colors} from '../helpers/Colors'
import {Card} from './WorkspaceCard'
import CardIcon from '../assets/icons/entities2.svg'


const Title = styled.h1`
    color: ${Colors.PrimaryText};
    font-size: 1.4em;
    margin: 1em;
`;

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
    max-width: 100%;
`;

export const Workspace : React.FC = () => {
    return (
        <>
            <Title>Workspace</Title>
            <Container>
                <Card icon={CardIcon} title="Client contract" lastUpdate="3" />
                <Card icon={CardIcon} title="Suppliter contract" lastUpdate="2" />
                <Card icon={CardIcon} title="Corporate" lastUpdate="4" />
            </Container>
        </>
    );
}