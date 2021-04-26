import styled from 'styled-components'
import React from 'react'
import {Publications} from '../Publications'
import {Workspace} from '../Workspace'

export const Home : React.FC = () => {
    return (
        <>
            <Publications />
            <Workspace />
        </>
    );
}