import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Profile} from './Profile'
import {Colors} from '../helpers/Colors'
import {MenuItemProps} from '../interfaces/MenuItemInterface'

import publicationIcon from '../assets/icons/publications.svg'
import ekosystemIcon from '../assets/icons/ecosystem.svg'
import entitiesIcon from '../assets/icons/entities.svg'


const Wrapper = styled.div`
    min-width: 24%;
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

const MenuText = styled(Link)`
    padding: 1em;
    padding-left: 0px;
    font-size: 1.2em;
    color: ${Colors.PrimaryText};
    text-decoration: none;

    &:hover { text-decoration: underline; }
`;

const Item : React.FC<MenuItemProps> = (props) => {
    return (
        <MenuItem>
            <MenuIcon src={props.icon} />
            <MenuText to={props.to}>{props.text}</MenuText>
        </MenuItem>
    );
}

export const LeftSlide = () => {
    const items : Array<MenuItemProps> = [
        {
            text: 'Publications',
            icon: publicationIcon,
            to: '/publications'
        },
        {
            text: 'Ekosystem',
            icon: ekosystemIcon,
            to: '/ekosystem'
        },
        {
            text: 'Entities',
            icon: entitiesIcon,
            to: '/entities'
        }
    ];

    return (
        <Wrapper>
            <Profile />

            <Menu>
                {
                    items.map(item => (
                        <Item to={item.to} icon={item.icon} text={item.text} />
                    ))
                }
            </Menu>
        </Wrapper>
    );
}