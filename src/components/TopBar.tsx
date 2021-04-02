import styled from 'styled-components'

import logo from '../assets/logo.png'
import bellIcon from '../assets/icons/bell.svg'
import homeIcon from '../assets/icons/house.svg'
import commentsIcon from '../assets/icons/comments.svg'

import {Navigation} from './Navigation'
import {SearchBar} from './SearchBar'


const Wrapper = styled.div`
    background-color: #fff;
    width: 100%;
    box-shadow: 0px 3px 24px silver;
	z-index: 999;
    position: relative;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: .3em;
    padding-left: 2em;
    padding-right: 2em;
`;

const BrandLogo = styled.img`
    max-width: 36px;
`;

const Menu = styled.div`
    justify-self: flex-end;

    display: flex;
    justify-content: flex-end;
    align-content: center;
`;

const MenuItem = styled.div`
    background-color: #e8e8e8;
    min-width: 26px;
    min-height: 26px;
    margin: .2em;
    padding: .6em;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Badge = styled.p`
    background-color: #0381be;
    color: white;
    text-align: center;
    font-size: 10px;
    border-radius: 12px;
    padding: 3px 8px;

    position: absolute;
    top: 0;
    right: -6px;
`;

export const TopBar = () : JSX.Element => {
	return (
		<Wrapper>
            <Container>
                <BrandLogo src={logo}  alt="MyCompanyName" title="MyCompanyName" />
                <Navigation />
                <SearchBar />

                <Menu>
                    <MenuItem>
                        <img src={homeIcon} />
                    </MenuItem>

                    <MenuItem>
                        <img src={commentsIcon} />
                        <Badge>3</Badge>
                    </MenuItem>

                    <MenuItem>
                        <img src={bellIcon} />
                        <Badge>3</Badge>
                    </MenuItem>
                </Menu>
            </Container>
		</Wrapper>
	);
}