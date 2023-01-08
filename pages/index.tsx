import type { NextPage } from 'next'
import {MaterialTable} from "../components/MaterialTable";
import {useFetchUsers} from "../utilities/queries";
import React from "react";
import {Alert, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Home: NextPage = () => {

  const {
    data: users,
    isLoading,
    isError,
  } = useFetchUsers();

  if (isLoading) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
  }

  if (isError) {
    return (
        <Alert severity="error">Hiba történt az adatok lekérése során :(</Alert>
    );
  }


  return (
      <MaterialTable/>
  )
}

export default Home
