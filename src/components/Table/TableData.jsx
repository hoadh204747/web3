
import { data } from "../../dummyData/data";
import './table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TableData = () => {
    const rows = [data.table]
    const keys = Object.keys(data.table)

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            keys.map((key) => (
                                <TableCell className="tableCell">{key}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell className="tableCell">{row.apr}</TableCell>
                            <TableCell className="tableCell">{row.timeInRange}</TableCell>
                            <TableCell className="tableCell">{row.PnL}</TableCell>
                            <TableCell className="tableCell">{row.investedAsset}</TableCell>
                            <TableCell className="tableCell">{row.currentInvest}</TableCell>
                            <TableCell className="tableCell">{row.fee_apr}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableData;