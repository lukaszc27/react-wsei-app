import React from 'react'
import styled from 'styled-components'

import picture from '../../assets/city.jpg'

const Wrapper = styled.div`
    width: 22%;
    padding: .8em;
    box-shadow: 0px 2px 2px #ccc;
    margin: .4em;
    border-radius: 3px;
    display: flex;
    line-height: 1.4em;
`;

const Image = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 6px;
`;

const Container = styled.div`
    padding: 0 .3em;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    color: #0000d6;
    justify-self: flex-start;
    flex-grow: 1;
    font-size: 16px;
`;

const Subtitle = styled.p`
    color: gray;
    font-size: 14px;
    justify-self: flex-end;
`;

export interface IEntity {
    image : string;
    title : string;
    address : string;
    city : string;
}

const EntityItem : React.FC<IEntity> = (props) => {
    return (
        <Wrapper>
            <Image src={props.image} alt={props.title} />
            <Container>
                <Title>{props.title}</Title>
                <Subtitle>{props.address}</Subtitle>
                <Subtitle>{props.city}</Subtitle>
            </Container>
        </Wrapper>
    );
}
export default EntityItem;