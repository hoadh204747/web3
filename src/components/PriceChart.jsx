import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip,  Line, ReferenceLine } from 'recharts';

import { data } from '../dummyData/data';

const PriceChart = () => {

    data.price_30_day.forEach(item => {
        const timestamp = item.date * 1000; // UNIX timestamp là tính bằng giây, Date trong JS là tính bằng mili giây
        const dateObject = new Date(timestamp);
        if (!isNaN(dateObject.getTime())) {
            const day = String(dateObject.getUTCDate()).padStart(2, '0');
            const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Tháng được tính từ 0 nên cần cộng thêm 1
            const formattedDate = `${day}/${month}`;
            item.date = formattedDate;
        } else {
            console.error('Invalid timestamp:', item.date);
        }
    });

    const formatPrice = (price) => {
        return Number(price).toFixed(2)
    }

    return (


        <LineChart width={500} height={400} data={data.price_30_day}
            margin={{ top: 40, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="date"  tick={{ fill: 'white', fontSize:12 }} />
            <YAxis  tick={{ fill: 'white', fontSize:12 }}/>
            <Tooltip formatter={formatPrice} />
            <Line type="monotone" dataKey="price"/>
            <ReferenceLine y={1000} stroke="red" label={{ value: '', position: 'insideTop', fill: 'red' }} />
        <ReferenceLine y={2000} stroke="green" label={{ value: '', position: 'insideTop', fill: 'green' }} />
        </LineChart>

    );
}

export default PriceChart