import styled from 'styled-components'
import {Colors} from '../helpers/Colors'

import searchLogo from '../assets/icons/search.svg';


const Wrapper = styled.form`
    display: flex;
    flex-grow: 3;
    
    position: relative;
    left: 5em;
`;

const Input = styled.input`
    color: ${Colors.SearchText};
    border: ${Colors.PrimaryBackground} solid 1px;
    border-right: 0px;
    width: 65%;

    border-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    padding: 8px 4px;
    margin: 0;
    text-align: center;
`;

const SearchButton = styled.button`
    background-color: ${Colors.White};
    background-repeat: no-repeat;
    border: ${Colors.PrimaryBackground} solid 1px;
    border-left: none;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    display: flex;
    justify-content: center;
    align-content: center;
`;

export const SearchBar = () : JSX.Element => {
    return (
        <Wrapper>
            <Input placeholder="Search Legalcluster" />
            <SearchButton>
                <img src={searchLogo} alt="Szukaj" />
            </SearchButton>
        </Wrapper>
    );
}