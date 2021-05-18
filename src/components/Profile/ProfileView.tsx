import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import face from '../../assets/face.png'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Image = styled.img`
    width: 128px;
    border-radius: 50%;
`;

const ProfileButton = styled(Link)`
    text-decoration: none;
    color: #74aebd;
    align-self: center;
    padding: .4em;
    font-size: 1.2em;
`;

const Badge = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    background-color: #cc9d56;
    outline: #fff solid .3em;
    position: absolute;
    bottom: 8px;
    right: 8px;
`;

const ImageWrapper = styled.div`
    position: relative;
    justify-self: center;
    align-self: center;
`;

const ProfileView : React.FC = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={face} alt="Face" />
                <Badge />
            </ImageWrapper>
            <ProfileButton to="/profile">See profile</ProfileButton>
        </Wrapper>
    );
}
export default ProfileView;