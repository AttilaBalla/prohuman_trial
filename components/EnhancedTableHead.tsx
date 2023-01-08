import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {visuallyHidden} from "@mui/utils";
import {TableData, HeadCell, Order} from "../utilities/types";

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TableData) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'firstName',
        numeric: false,
        label: 'First Name',
    },
    {
        id: 'lastName',
        numeric: false,
        label: 'Last Name',
    },
    {
        id: 'age',
        numeric: true,
        label: 'Age',
    },
    {
        id: 'city',
        numeric: false,
        label: 'City',
    },
    {
        id: 'country',
        numeric: false,
        label: 'Country',
    },
    {
        id: 'postalCode',
        numeric: true,
        label: 'Postal Code',
    },
    {
        id: 'email',
        numeric: false,
        label: 'E-mail',
    },
];

export function EnhancedTableHead(props: EnhancedTableProps) {
    const {order, orderBy, onRequestSort} =
        props;
    const createSortHandler =
        (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
