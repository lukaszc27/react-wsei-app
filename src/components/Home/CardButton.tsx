import React from 'react'
import styled from 'styled-components'
import {Colors} from '../../helpers/Colors'

const Wrapper = styled.div`
    margin: .3em;
    display: flex;
`;

const IconSize = '18px';
const Icon = styled.img`
    width: ${IconSize};
    height: ${IconSize};
    align-self: center;
`;

const Text = styled.span`
    align-self: center;
    font-size: 0.8em;
    position: relative;
    left: .3em;
    color: ${Colors.Gray};
`;

interface CardButton {
    icon? : string,
    text?: string;
}
const CardButton : React.FC<CardButton> = (props) => {
    return (
        <Wrapper>
            { props.icon && <Icon src={props.icon} alt="Icon" /> }
            { props.text && <Text>{props.text}</Text> }
        </Wrapper>
    )
};
export default CardButton;