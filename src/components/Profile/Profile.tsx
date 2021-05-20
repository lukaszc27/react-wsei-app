import React from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import ProfileView from './ProfileView'
import {Colors} from '../../helpers/Colors'


// import icons
import messageIcon from '../../assets/icons/house.svg'
import commentsIcon from '../../assets/icons/comments.svg'
import editIcon from '../../assets/icons/plus.svg'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.White};
    padding: 1em;
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 6px;
`;

const Header = styled.section`
    align-self: flex-start;
    border-bottom: #ccc solid 1px;
    width: 97%;
    padding: 0 1em 2em 1em;
    position: relative;
`;

const HeaderTopBar = styled.div`
    text-align: right;
    display: flex;
    justify-content: flex-end;
`;

const Container = styled.div`
    width: 100%;
    align-self: flex-end;
    display: flex;
    position: relative;
`;

const ProfileRow = styled.div`
    justify-self: flex-start;
    align-self: center;
    padding: 0 2em;
`;

const Row = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

const RightRow = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ExpandRow = styled.div`
    justify-self: flex-start;
    /* align-self: center; */
    flex-grow: 2;
    color: #232c47;
    display: flex;

    h3 {
        font-size: 1.4em;
        font-weight: bolder;
        line-height: 1.4;
    }

    p {
        margin-top: 0.6em;
        font-size: 1.2em;
        line-height: 1.4;
    }
`;

const EditButton = styled.button`
    position: absolute;
    top: .4em;
    right: 0;
    padding: .5em;
    border: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.White};
    transition: all .2s;

    &:hover { background-color: #ccc; }
`;

const Section = styled.section`
    border-bottom: #ccc solid 1px;
    padding: 2em 1em;
    position: relative;
    width: 97%;
`;

const SectionTitle = styled.h3`
    font-size: 1.4em;
    color: #a5a8b4;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1em 0em;
`;

const Tag = styled.span`
    color: #5a9eb0;
    background-color: #e6f0f3;
    padding: .4em;
    margin: 0 .4em;
    border-radius: 3px 6px;

    &:first-child { margin-left: 0; }
`;

class Profile extends React.Component {
    render() {
        return (
            <Wrapper>
                <Header>
                    <HeaderTopBar>
                        <HeaderButton to="/comments" icon={commentsIcon}>Message</HeaderButton>
                        <HeaderButton to="#" icon={messageIcon}>Create a request</HeaderButton>
                        <HeaderButton to="#" icon={messageIcon}>Add to a cluster</HeaderButton>
                    </HeaderTopBar>

                    <Container>
                        <EditButton>
                            <img src={editIcon} alt="Edit" />
                        </EditButton>
                        <ProfileRow>
                            <ProfileView />
                        </ProfileRow>

                        <ExpandRow>
                            <Row>
                                <h3>
                                    Humberta swift<br />
                                    Clifford Chance
                                </h3>

                                <p>
                                    New-york<br />
                                    Partner
                                </p>
                            </Row>
                            <RightRow>
                                <p>humbertaswift@gmail.com</p>
                                <p>+33 (0)6 12 34 56 78</p>
                            </RightRow>
                        </ExpandRow>
                    </Container>
                </Header>

                <Section>
                    <EditButton>
                        <img src={editIcon} alt="Edit" />
                    </EditButton>

                    <SectionTitle>Expertise</SectionTitle>
                    <Tags>
                        <Tag>Mergers and acquisition</Tag>
                    </Tags>

                    <SectionTitle>Specialties</SectionTitle>
                    <Tags>
                        <Tag>Cross border operation</Tag>
                        <Tag>Transaction over 500M/$</Tag>
                    </Tags>

                    <SectionTitle>Admission to practice law</SectionTitle>
                    <Tags>
                        <Tag>Paris bar association</Tag>
                        <Tag>Tunisian bar association</Tag>
                    </Tags>

                    <SectionTitle>Counties</SectionTitle>
                    <Tags>
                        <Tag>Tunisia</Tag>
                    </Tags>
                </Section>
            </Wrapper>
        )
    }
}
export default Profile;