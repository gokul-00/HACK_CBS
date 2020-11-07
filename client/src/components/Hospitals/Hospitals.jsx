import React from 'react';
import SearchBar from './searchBar'
import { Container } from '@material-ui/core'
import HospitalList from './HospitalList';

function Hospitals() {
    return (
        <Container>
            <SearchBar />
            <HospitalList />
        </Container>
    )
}

export default Hospitals
