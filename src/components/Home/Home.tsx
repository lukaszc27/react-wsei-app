import styled from 'styled-components'
import React from 'react'
import {Publications} from '../Publications'
import {Workspace, Title} from '../Workspace'
import {Colors} from '../../helpers/Colors'

import FilterIcon from '../../assets/icons/search.png'
import DropdownArrow from '../../assets/icons/arrow-down.svg'
import Card from './Card'

import useDropdown from 'react-dropdown-hook'
import { render } from '@testing-library/react'


const ResumeTopBar = styled.div`
    display: flex;
    align-content: center;
    position: relative;
`;

const FilterWrapper = styled.form`
    justify-self: flex-end;
    align-self: center;
    /* position: absolute;
    right: 0; */
    position: relative;
    display: flex;
`;

const FilterInput = styled.input`
    margin: 0;
    padding: 0;
    border: ${Colors.PrimaryBackground} solid 1px;
    background-color: ${Colors.White};
    border-right: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
`;

const FilterButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    border: ${Colors.PrimaryBackground} solid 1px;
    background-color: ${Colors.White};
    border-left: 0;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-content: center;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
`;

const FollowedButton = styled.div`
    align-self: center;
    color: ${Colors.BadgeBackground};
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
    left: 1em;

    > img { margin: 6px; }
`;

const RightContainer = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-self: center;
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export class Home extends React.Component {
    render() {
        return (
            <>
                <Publications />
                <Workspace />

                <ResumeTopBar>
                    <Title>Resume your work</Title>
                    <RightContainer>
                        <FilterWrapper>
                            <FilterInput type="text" placeholder="Filter by title..." />
                            <FilterButton>
                                <img src={FilterIcon} alt="Filter" />
                            </FilterButton>
                        </FilterWrapper>
                        <FollowedButton>
                            <span>Followed</span>
                            <img src={DropdownArrow} alt="Dropdown" />
                        </FollowedButton>
                    </RightContainer>
                </ResumeTopBar>

                <Container></Container>
            </>
        );
    }
}

// export const Home : React.FC = () => {
//     return (
//         <>
//             <Publications />
//             <Workspace />

//             <ResumeTopBar>
//                 <Title>Resume your work</Title>

//                 <RightContainer>
//                 <FilterWrapper>
//                     <FilterInput type="text" placeholder="Filter by title" />
//                     <FilterButton>
//                         <img src={FilterIcon} alt="Filter" />
//                     </FilterButton>
//                 </FilterWrapper>

//                 <FollowedButton>
//                     {/* <img src={FilterIcon} alt="Filter" /> */}
//                     <span>Followed</span>
//                     <img src={DropdownArrow} alt="Dropdown" />
//                 </FollowedButton>
//                 </RightContainer>
//             </ResumeTopBar>
//             <Container>
//             </Container>
//         </>
//     );
// }