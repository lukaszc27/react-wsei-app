import styled from 'styled-components'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Colors} from '../helpers/Colors'
import {PublicationItem} from './PublicationItem'

import CityImage from '../assets/city.jpg'
import axios from 'axios'

const Wrapper = styled.section`
    background-color: ${Colors.White};
    box-shadow: 0px 3px 3px ${Colors.Silver};
    border-radius: 6px;
    width: 100%;
    position: relative;
    display: flex;
`;

const BrandImage = styled.div`
    background-image: url(${CityImage});
    background-repeat: no-repeat;
    align-self: flex-start;
    min-width: 300px;
    min-height: 300px;
    position: relative;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`;

const BrandTitle = styled.h3`
    color: ${Colors.White};
    font-size: 1.2em;
    position: absolute;
    bottom: 2em;
    left: .4em;
`;

const Content = styled.div`
    align-self: flex-start;
    flex-grow: 2;
    padding: .8em;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Title = styled.h2`
    font-size: 1.4em;
    color: ${Colors.PrimaryText};
    justify-self: flex-start;
    margin-bottom: .4em;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    overflow: auto;
`;

const MorePublication = styled(Link)`
    justify-self: flex-end;
    margin-top: .6em;
    font-size: 1em;
    color: ${Colors.SecondaryText};
    text-decoration: none;

    &:hover { text-decoration: underline; }
`;

interface IPublication {
    userId : number;
    id : number;
    title : string;
    body : string;
}

interface PublicationState {
    publications : Array<IPublication>;
}
interface PublicationProps {
}
export class Publications extends React.Component<PublicationProps, PublicationState> {
    // constructor(props : PublicationProps) {
    //     super(props);
    // }

    state = {
        publications: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response.data);
                this.setState({
                    publications: response.data
                });
            })
            .catch(error => {
                console.log(error.data)
            });
    }

    render() {
        const pubSize : number = 3; // ilość publikacji na stronie głównej
        const pubOffset : number = Math.floor(Math.random() * 90);

        return (
            <Wrapper>
                <BrandImage>
                    <BrandTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</BrandTitle>
                </BrandImage>
            
                <Content>
                    <Title>Latest publications</Title>
                    <Container>
                        {
                            this.state.publications.slice(pubOffset, pubOffset + pubSize)
                                .map((item : IPublication) => (
                                    <PublicationItem title={item.title} key={item.id} body="" />
                            ))
                        }
                    </Container>
                    <MorePublication to="/publications">See more publications</MorePublication>
                </Content>
            </Wrapper>
        );
    }
}

// export const Publications : React.FC = () => { 
//     const [publications, setPublications] = useState(0);

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 setPublications(response.data);
//             })
//             .catch (error => {
//                 console.log(error.data);
//             });
//     });

//     return (
//         <Wrapper>
//             <BrandImage>
//                 <BrandTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</BrandTitle>
//             </BrandImage>

//             <Content>
//                 <Title>Latest publications</Title>
//                 <Container>
//                     <PublicationItem />
//                     <PublicationItem />
//                     <PublicationItem />
//                 </Container>
//                 <MorePublication>See more publications</MorePublication>
//             </Content>
//         </Wrapper>
//     );
// }