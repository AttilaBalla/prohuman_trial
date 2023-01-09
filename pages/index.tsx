import type {NextPage} from 'next'
import {useFetchUsers} from "../utilities/queries";
import React from "react";
import {Alert, Box} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {filterUsersByPostcode} from "../utilities/helpers";
import EnhancedTable from '../components/table/EnhancedTable';

const Home: NextPage = () => {

    const {
        data: response,
        isLoading,
        isError,
    } = useFetchUsers();

    if (isLoading) {
        return (
            <Box sx={{display: 'flex'}}>
                <CircularProgress/>
            </Box>
        );
    }

    if (isError) {
        return (
            <Alert severity="error">Hiba történt az adatok lekérése során :(</Alert>
        );
    }

    const filteredUsers = filterUsersByPostcode(response.results);

    return (
        <Box sx={{maxWidth: '1200px', margin: '3rem auto'}}>
            <EnhancedTable users={filteredUsers}/>
        </Box>
    )
}

export default Home
