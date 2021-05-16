import styled from 'styled-components'
import React from 'react'
import settingsIcon from '../../assets/icons/settings.svg'
import dropdownArrow from '../../assets/icons/arrow-down.svg'
import {SearchBar} from '../SearchBar'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TopWidget = styled.section`
    width: 100%;
    height: 5em;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        position: relative;
    }
`;

const Title = styled.h1`
    justify-self: flex-start;
    font-size: 1.2em;
`;

const SettingsButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    justify-self: flex-start;
    margin-left: 1em;

    > img { width: 18px; }
`;

const DropdownButton = styled.div`
    margin: 0;
    padding: .4em;
    border-radius: 3px;
    background-color: burlywood;
    display: flex;
    justify-content: space-around;

    img { width: 16px; }
    span { padding: 0 6px; }
`;

const EntityWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
`;

const SearchForm = styled.form`
    justify-self: flex-end;
    align-self: flex-end;
    position: absolute;
    right: 0;
`;

const SearchInput = styled.input`
`;

export const Entities : React.FC = () => {
    return (
        <Wrapper>
            <TopWidget>
                <div>
                    <Title>Entities</Title>
                    <SettingsButton>
                        <img src={settingsIcon} alt="Settings" />
                    </SettingsButton>
                </div>
                <div>
                    <DropdownButton>
                        <img src={settingsIcon} alt="Settings" />
                        <span>All</span>
                        <img src={dropdownArrow} alt="Arrow" />
                    </DropdownButton>

                    <SearchBar />
                </div>
            </TopWidget>
            <EntityWrapper>
            </EntityWrapper>
        </Wrapper>
    );
}