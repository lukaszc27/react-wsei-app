import styled from 'styled-components'
import userDropdown from 'react-dropdown-hook'
import {Colors} from '../helpers/Colors'

import houseLogo from '../assets/icons/house2.svg'
import dropdownArrow from '../assets/icons/arrow-down.svg'
import useDropdown from 'react-dropdown-hook';


const MainWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 2em;

    width: 15%;
    height: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
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

const DropdownButton = styled.button`
    justify-self: flex-end;
    margin: 0;
    padding: 6px 8px;
    border: 0;
    background-color: transparent;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 46px;
    background-color: ${Colors.White};
    width: 100%;

    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &:hover { }
`;

export const Navigation : React.FC = (props) => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    return (
        <MainWrapper>
            <Wrapper ref={wrapperRef}>
                <MenuLogo src={houseLogo} />
                <Menu>
                    <MenuItem>Home</MenuItem>
                </Menu>
                <DropdownButton onClick={toggleDropdown}>
                    <img src={dropdownArrow} alt="Dropdown menu" />
                </DropdownButton>

            </Wrapper>
            { dropdownOpen && 
            <Dropdown>
                { props.children }
            </Dropdown> 
            }
        </MainWrapper>
    );
}