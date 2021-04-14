import styled from 'styled-components'
import {Colors} from '../helpers/Colors'
import useDropdown from 'react-dropdown-hook';

import houseLogo from '../assets/icons/house2.svg'
import dropdownArrow from '../assets/icons/arrow-down.svg'
import logoutIcon from '../assets/icons/logout.svg'
import privacyIcon from '../assets/icons/privacy.svg'
import settingsIcon from '../assets/icons/settings.svg'
import avatarLogo from '../assets/face.png'
import publicationsLogo from '../assets/icons/publications.svg'
import peopleLogo from '../assets/icons/people.svg'
import entitiesLogo from '../assets/icons/entities.svg'
import administrationLogo from '../assets/icons/administration.svg'
import clientContractLogo from '../assets/icons/comments.svg'
import corporateLogo from '../assets/icons/comments.svg'
import groupNormsLogo from '../assets/icons/network.svg'


const MainWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 2em;

    width: 20%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: ${Colors.Silver} solid 1px;
    border-top: 0;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Filter = styled.input`
    background-color: ${Colors.White};
    border: ${Colors.Silver} solid 1px;
    border-radius: 3px;
    margin: .5em;
    padding: 6px 3px;
`;

const Container = styled.div`
    overflow: auto;
    max-height: 300px;
    padding: .5em;
    padding-top: 0;
`;

const AccoutSection = styled.div`
    border-top: ${Colors.Silver} solid 1px;
    border-bottom: ${Colors.Silver} solid 1px;
    padding: .5em;
`;

const SectionTitle = styled.h3`
    color: ${Colors.Gray};
    font-size: .9em;
    font-weight: bold;
    padding: 3px 0px;
`;

const LogoutSection = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: .5em;
`;

const LogoutText = styled.div`
    color: ${Colors.Gray};
    margin-left: .4em;
`;

const Nav = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

const NavItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    color: ${Colors.Gray};
    padding: 3px 0px;

    transition: all .3s;
    &:hover { background-color: #cfcfcf; }
`;

const NavItemIcon = styled.img`
    align-self: flex-start;
    justify-self: center;
    padding: .3em;
    width: 25px;
`;
const NavItemText = styled.p`
    align-self: center;
    padding: 6px 3px;
`;

const SeeProfile = styled.a`
    font-size: .8em;
    color: ${Colors.SecondaryText};
`;

interface NavItemProps {
    icon : string;
    title? : string;    // optional
}
const NavElement : React.FC<NavItemProps> = (props) => {
    return (
        <NavItem>
            <NavItemIcon src={props.icon} alt={props.title} />
            <NavItemText>{props.children == null ? props.title : props.children}</NavItemText>
        </NavItem>
    );
}

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
                <Filter type="text" placeholder="Filter..." />
                <Container>
                    {/* {props.children} */}
                    <SectionTitle>Platform</SectionTitle>
                    <Nav>
                        <NavElement icon={houseLogo} title="Home" />
                        <NavElement icon={publicationsLogo} title="Publications" />
                        <NavElement icon={peopleLogo} title="People" />
                        <NavElement icon={entitiesLogo} title="Entities" />
                        <NavElement icon={administrationLogo} title="Administration" />
                    </Nav>

                    <SectionTitle>Workspaces</SectionTitle>
                    <Nav>
                        <NavElement icon={clientContractLogo} title="Client contracts" />
                        <NavElement icon={clientContractLogo} title="Supplier contract" />
                        <NavElement icon={corporateLogo} title="Corporate" />
                        <NavElement icon={groupNormsLogo} title="Group norms" />
                        <NavElement icon={clientContractLogo} title="Real estate contracts" />
                    </Nav>
                </Container>
                <AccoutSection>
                    <SectionTitle>Account</SectionTitle>
                    <Nav>
                        <NavElement icon={avatarLogo} title="Łukasz Cieśla">
                            <p>Łukasz Cieśla</p>
                            <SeeProfile>See profile</SeeProfile>
                        </NavElement>
                        <NavElement icon={privacyIcon} title="Privacy" />
                        <NavElement icon={settingsIcon} title="Settings" />
                    </Nav>
                </AccoutSection>
                <LogoutSection>
                    <img src={logoutIcon} alt="Logout" />
                    <LogoutText>Logout</LogoutText>
                </LogoutSection>
            </Dropdown>
            }
        </MainWrapper>
    );
}