import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import {createTableData} from '../../utilities/helpers';
import {TableData, IRandomUser, Order, Gender} from '../../utilities/types';
import {EnhancedTableHead} from "./EnhancedTableHead";
import {Box, FormControlLabel, FormGroup, Switch} from "@mui/material";
import {EnhancedTableBody} from "./EnhancedTableBody";

interface IProps {
    users: IRandomUser[]
}

export default function EnhancedTable({users}: IProps) {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof TableData>('firstName');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [onlyMales, setOnlyMales] = React.useState(false);
    const [onlyFemales, setOnlyFemales] = React.useState(false);

    const rows = users.filter((user) => {
        if (onlyMales) {
            return user.gender === 'male'
        }

        if (onlyFemales) {
            return user.gender === 'female'
        }

        return user;

    }).map((user) => {
        return createTableData(
            user.name.first,
            user.name.last,
            user.dob.age,
            user.location.city,
            user.location.country,
            user.location.postcode,
            user.email)
    });

    const toggleGenderFilter = (gender: Gender, checked: boolean) => {
        if (gender === 'male') {
            setOnlyMales(checked);
            setOnlyFemales(false);
        } else {
            setOnlyMales(false);
            setOnlyFemales(checked);
        }
    }

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof TableData,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <Paper sx={{width: '100%', mb: 2, overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: 588}}>
                <Table
                    stickyHeader
                    sx={{minWidth: 750}}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <EnhancedTableBody
                        page={page}
                        rows={rows}
                        rowsPerPage={rowsPerPage}
                        order={order}
                        orderBy={orderBy}
                    />
                </Table>
            </TableContainer>
            <Box sx={{display: 'flex', justifyContent: 'space-between', padding: '0 1rem'}}>
                <FormGroup row>
                    <FormControlLabel control={<Switch checked={onlyMales}
                                                       onChange={(e) => {
                                                           toggleGenderFilter('male', e.target.checked)
                                                       }}/>} label="Males only"/>
                    <FormControlLabel control={<Switch checked={onlyFemales}
                                                       onChange={(e) => {
                                                           toggleGenderFilter('female', e.target.checked)
                                                       }}/>} label="Females only"/>
                </FormGroup>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 50]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Box>
        </Paper>
    );
}
