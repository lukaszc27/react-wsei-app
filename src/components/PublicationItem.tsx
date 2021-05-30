import React from 'react'
import styled from 'styled-components'
import CityImage from '../assets/office.jpg'
import {Colors} from '../helpers/Colors'


const Wrapper = styled.div`
display: flex;
margin: .2em;
`;

const Image = styled.img`
    width: 64px;
    height: 64px;
`;
const Content = styled.div`
    padding: .4em;
    color: ${Colors.PrimaryText};
    display: flex;
    flex-direction: column;
`;

const InformationContainer = styled.div`
    justify-self: flex-end;
    color: ${Colors.Gray};
    margin-top: .6em;
    font-size: .8em;
`;

interface PublicationItemProps {
    image? : string;
    title : string;
    body : string;
}

export const PublicationItem : React.FC = () => {
    return (
        <Wrapper>
            <Image src={CityImage} alt="City" />
            <Content>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatum deleniti impedit, blanditiis corporis ad excepturi, </h3>
                <InformationContainer>
                    06 sierpień 2020
                </InformationContainer>
            </Content>
        </Wrapper>
    );
}