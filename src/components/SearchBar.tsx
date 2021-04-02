import styled from 'styled-components'
import searchLogo from '../assets/icons/search.svg';


const Wrapper = styled.form`
    display: flex;
    flex-grow: 3;
    
    position: relative;
    left: 5em;
`;

const Input = styled.input`
    color: #c3c5c8;
    border: #e8e8e8 solid 1px;
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
    background-color: #fff;
    background-repeat: no-repeat;
    border: #e8e8e8 solid 1px;
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
                <img src={searchLogo} />
            </SearchButton>
        </Wrapper>
    );
}