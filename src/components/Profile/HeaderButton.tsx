import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.span`
    display: flex;
    align-items: center;
    padding: .2em;
    margin: 0 .6em;
`;

const Content = styled(Link)`
    position: relative;
    left: .3em;
    color: #232c47;
    text-decoration: none;
`;

interface HeaderButtonProps {
    icon : string;
    text? : string;
    to : string
}
const HeaderButton : React.FC<HeaderButtonProps> = (props) => {
    return (
        <Wrapper>
            <img src={props.icon} alt="Button icon" />
            <Content to={props.to}>{props.text ? props.text : props.children}</Content>
        </Wrapper>
    );
}
export default HeaderButton