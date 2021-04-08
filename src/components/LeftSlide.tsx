import styled from 'styled-components'
import {Profile} from './Profile'
import {Colors} from '../helpers/Colors'
import {MenuItemProps} from '../interfaces/MenuItemInterface'

import publicationIcon from '../assets/icons/publications.svg'
import ekosystemIcon from '../assets/icons/ecosystem.svg'
import entitiesIcon from '../assets/icons/entities.svg'


const Wrapper = styled.div`
    width: 25%;
`;

const Menu = styled.ul`
    padding: 1em;
`;

const MenuItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-content: center;
`;

const MenuIcon = styled.img`
    padding: 1em;
    width: 32px;
    color: ${Colors.PrimaryText};
`;

const MenuText = styled.p`
    padding: 1em;
    padding-left: 0px;
    font-size: 1.2em;
    color: ${Colors.PrimaryText};
`;

const Item = (props : MenuItemProps) : JSX.Element => {
    return (
        <MenuItem>
            <MenuIcon src={props.icon} />
            <MenuText>{props.text}</MenuText>
        </MenuItem>
    );
}

export const LeftSlide = () => {
    return (
        <Wrapper>
            <Profile />

            <Menu>
                <Item icon={publicationIcon} text="Publications" />
                <Item icon={ekosystemIcon} text="Ekosystem" />
                <Item icon={entitiesIcon} text="Entities" />
            </Menu>
        </Wrapper>
    );
}