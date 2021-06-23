import React from 'react';
import styled from 'styled-components'
import { Colors } from '../../helpers/Colors';

import RowFilter from './RowFilter';
import AddIcon from '../../assets/icons/plus.svg';

const Wrapper = styled.section`
    width: 100%;
    background-color: ${Colors.White};
`;

const Caption = styled.p`
    color: gray;
    font-size: .9em;
`;

const FilterContainer = styled.div`
    margin: .8em 0;
    display: flex;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

const Button = styled.button`
    border: none;
    background: transparent;
    color: ${Colors.SecondaryText};
    font-size: 1em;
    display: flex;

    span {
        position: relative;
        left: .3em;
    }
`;

const Select = styled.select`
    border: none;
    background: transparent;
    font-size: 1em;
    color: ${Colors.SecondaryText};
    position: relative;
    left: 1em;
`;

interface FilterState {
    filters: Array<React.ReactElement>
}
class Filter extends React.Component<{}, FilterState> {
    state = {
        filters: []
    }

    addFilterButtonHandle = (): void => {
        const selectType : HTMLSelectElement | null = document.querySelector('#queryType');
        if (selectType !== null) {
            if (selectType.value !== 'null') {
                let tab : Array<React.ReactElement> = this.state.filters;
                tab.push(<RowFilter type={selectType.value} />);

                this.setState({
                    filters: tab
                });
            }
            else {
                alert('Przed dodaniem filtru przeszukiwania, proszę wybrać typ filtru');
                selectType.focus();
            }
        }
    }

    render = () => {
        return (
            <Wrapper>
                <Caption>Rows and filtered by the following conditions starting from the top</Caption>
                <FilterContainer>
                    {this.state.filters}
                </FilterContainer>

                <ButtonWrapper>
                    <Button onClick={this.addFilterButtonHandle}>
                        <img src={AddIcon} alt="Add filter" />
                        <span>Add filter</span>
                    </Button>
                    <Select id="queryType">
                        <option disabled selected value="null">choose property</option>
                        <option value="Where">Where</option>
                        <option value="And">And</option>
                        <option value="Or">Or</option>
                    </Select>
                </ButtonWrapper>
            </Wrapper>
        )
    }
}
export default Filter;
