import {getComparator} from "../../utilities/helpers";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {Order, TableData} from "../../utilities/types";

interface IProps {
    rows: TableData[];
    page: number;
    rowsPerPage: number;
    order: Order;
    orderBy: keyof TableData;
}
export function EnhancedTableBody({rows, page, rowsPerPage, order, orderBy}: IProps) {

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .sort(getComparator(order, orderBy))
                    .map((row, key) => {
                        return (
                            <TableRow
                                hover
                        role="checkbox"
                        tabIndex={-1}
                        key={key}
                            >
                            <TableCell>{row.firstName}</TableCell>
                            <TableCell>{row.lastName}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell>{row.city}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell align="right">{row.postalCode}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            </TableRow>
                    );
                    })}
    {emptyRows > 0 && (
        <TableRow
            style={{
        height: (53) * emptyRows,
    }}
    >
        <TableCell colSpan={6}/>
    </TableRow>
    )}
    </TableBody>
    )
}
