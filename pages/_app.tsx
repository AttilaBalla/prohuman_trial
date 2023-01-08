import React from "react";
import type {AppProps} from 'next/app'
import MaterialAppBar from "../components/MaterialAppBar";
import CssBaseline from '@mui/material/CssBaseline';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <CssBaseline/>
            <QueryClientProvider client={queryClient}>
                <MaterialAppBar/>
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )

}

export default MyApp
