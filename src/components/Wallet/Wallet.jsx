import React from 'react';
import { Table } from 'antd';
import { wallet } from '../../dummyData/wallet';
import './wallet.scss'

const Wallet = () => {
    const expandedRowRender = (record) => {
        return (
            <div style={{ textAlign: 'right' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {record.nfts.map((n, i) => (
                        <li key={i}>{n.slice(-6)}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const columns = [
        {
            title: 'Wallet Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'PnL',
            dataIndex: 'PnL',
            key: 'PnL',
        },
        {
            title: 'APR',
            dataIndex: 'apr',
            key: 'apr',
        },
        {
            title: 'Number NFT',
            dataIndex: 'numberNfts',
            key: 'numberNfts',
        },
    ];

    const data = wallet.wallets.map((w, i) => ({
        ...w,
        PnL: w.PnL.toFixed(2),
        apr: w.apr.toFixed(2),
        key: i.toString(),
    }));

    return (
        <>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender,
                    rowExpandable: (record) => record.nfts && record.nfts.length > 0,
                }}
                dataSource={data}
                pagination={false}
                expandIconColumnIndex={columns.length}
            />
        </>
    );
};

export default Wallet;
