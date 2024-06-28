import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './top_position.scss'
import { dataTable as data } from '../../dummyData/dataTable'

const TopPosition = () => {
    return (
        <div >
            <TableContainer component={Paper} style={{backgroundColor:'#031116'}}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{color:'#fff'}}>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >pool</TableCell>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >NFT ID</TableCell>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >Ower</TableCell>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >Assets In USD</TableCell>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >APR</TableCell>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >Fee APR</TableCell>
                            <TableCell style={{color:'wheat', fontSize:14, fontFamily:'monospace'}} className='tableCell' >PnL</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.nfts.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{row.poolToken0}/{row.poolToken1}</TableCell>
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{row.nftId}</TableCell>
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{(row.owner).substring(0, 10)}</TableCell>
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{(row.assetsInUSD).toFixed(2)}</TableCell>
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{(row.apr).toFixed(2)}</TableCell>
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{(row.feeAPR).toFixed(2)}</TableCell>
                                <TableCell style={{color:'whitesmoke', fontWeight: 500, fontFamily: 'inherit', fontSize:15}}>{row.pnl === 0 ? row.pnl : (row.pnl).toFixed(2)}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TopPosition;