import styled from 'styled-components'

import houseLogo from '../assets/icons/house2.svg'
import dropdownArrow from '../assets/icons/arrow-down.svg'


const Wrapper = styled.nav`
    /* margin-left: 2em; */
    width: 15%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    left: 2em;
`;

const MenuLogo = styled.img`
    min-width: 32px;
`;

const Menu = styled.ul`
    padding: .5em;
    flex-grow: 2;
`;

const MenuItem = styled.li`
`;

const DropdownArrow = styled.img`
    justify-self: flex-end;
`;

export const Navigation = () : JSX.Element => {
    return (
        <Wrapper>
            <MenuLogo src={houseLogo} />
            <Menu>
                <MenuItem>Home</MenuItem>
            </Menu>
            <DropdownArrow src={dropdownArrow} />
        </Wrapper>
    );
}