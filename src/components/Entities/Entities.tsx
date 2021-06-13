import styled from 'styled-components'
import React, {ChangeEvent, useState} from 'react'
import EnityItem, {IEntity} from './EntityItem'

import ConfigIcon from '../../assets/icons/settings.svg'
import SearchIcon from '../../assets/icons/search.svg'
import ArrowdownIcon from '../../assets/icons/arrow-down.svg'
import picture from '../../assets/city.jpg'


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 1em;
    border-radius: 6px;
    box-shadow: 0px 3px 6px #ccc;
`;

const TopWrapper = styled.section`
    width: 100%;
`;

const TitleBar = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    > h1 {
        font-size: 1.6em;
    }

    > img {
        margin-left: .4em;
        width: 16px;
        height: 16px;
    }
`;

const ToolBarWrapper = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    margin: 1em 0;
`;
const ToolBarActions = styled.div`
    display: flex;
`;

const ToolBarSearch = styled.div`
    justify-self: flex-end;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > input[type="text"] {
        margin: 0;
        padding: .4em;
        border: #ccc solid 1px;
        border-right: 0;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    > button {
        margin: 0;
        padding: 0;
        background: none;
        border: #ccc solid 1px;
        border-left: 0;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        padding: .3em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ToolBarButton = styled.button`
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: .5em .8em;
    font-size: .9em;

    &:hover { background-color: #e6e6e6; }

    > img {
        margin-left: .4em;
    }
`;

const Separator = styled.span`
    width: 1px;
    height: 100%;
    border-left: #ccc solid 1px;
    margin: 0px 3px;
`;

const FollowedButton = styled.span`
    padding: .6em;
    border: #00f solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    /* color: #00f; */
    font-size: .7em;

    img { margin-left: .4em; }
`;

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const Entities : React.FC = () => {
    let entities : Array<IEntity> = [];
    const [pattern, setPattern] = useState<string>('');

    const patternChangeHandle = (event : ChangeEvent<HTMLInputElement>) => {
        setPattern(event.target.value);
    }

    for (let i = 0; i < 6*2; i++) {
        entities.push({
            image : picture,
            title : 'World comapny SAS',
            address : 'Caracas 1050, Distrito Capital,',
            city : 'Venezuela'
        });

        entities.push({
            image : picture,
            title : 'Subsid Corp Ltd',
            address : 'Caracas 1050, Distrito Capital,',
            city : 'Venezuela'
        });
    }

    return (
        <Wrapper>
            <TopWrapper>
                <TitleBar>
                    <h1>Entities</h1>
                    <img src={ConfigIcon} alt="Configure" />
                </TitleBar>
                <ToolBarWrapper>
                    <ToolBarActions>
                        <ToolBarButton>
                            All
                            <img src={ArrowdownIcon} alt="Arrow down" />
                        </ToolBarButton>
                        <ToolBarButton>...</ToolBarButton>
                        <Separator />
                        <ToolBarButton>Sort</ToolBarButton>
                        <ToolBarButton>Filters</ToolBarButton>
                        <Separator />                       
                        <ToolBarButton>Share</ToolBarButton>
                    </ToolBarActions>

                    <ToolBarSearch>
                        <input type="text" name="filter" placeholder="Search ..." value={pattern} onChange={patternChangeHandle} />
                        <button type="button">
                            <img src={SearchIcon} alt="Search" />
                        </button>

                        <Separator />
                        <FollowedButton>
                            Followed
                            <img src={ArrowdownIcon} alt="Dropdown" />
                        </FollowedButton>
                    </ToolBarSearch>
                </ToolBarWrapper>
            </TopWrapper>

            <Container>
                {
                    entities.map((item : IEntity) => (
                        item.title.toLocaleLowerCase().includes(pattern.toLocaleLowerCase()) &&
                        <EnityItem 
                            image={item.image}
                            title={item.title}
                            address={item.address}
                            city={item.city} />
                    ))
                }
            </Container>
        </Wrapper>
    );
}