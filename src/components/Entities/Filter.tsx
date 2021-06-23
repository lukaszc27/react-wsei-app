import React from 'react';
import styled from 'styled-components'
import { Colors } from '../../helpers/Colors';

import RowFilter from './RowFilter';

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

const ButtonWrapper = styled.div``;

const Button = styled.button`
    border: none;
    background: transparent;
    color: ${Colors.BadgeBackground};
    font-size: 1em;
`;

const Select = styled.select`
    border: none;
    background: transparent;
    font-size: 1em;
    color: ${Colors.BadgeBackground};
    position: relative;
    left: 1em;
`;

interface FilterState {
    filters: Array<any>
}
class Filter extends React.Component<{}, FilterState> {
    state = {
        filters: []
    }

    addFilterButtonHandle = (): void => {
        const selectType : HTMLSelectElement | null = document.querySelector('#queryType');
        if (selectType !== null && selectType.value !== 'null') {
            let tab : Array<any> = this.state.filters;
            tab.push(<RowFilter type={selectType.value} />);

            this.setState({
                filters: tab
            });
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
                    <Button onClick={this.addFilterButtonHandle}>Add filter</Button>
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
