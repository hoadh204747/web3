import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

import { data } from '../dummyData/data';

const PriceChart = () => {

    return (


        <LineChart width={1000} height={300} data={data.price_30_day}
            margin={{ top: 40, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottomLeft', offset: -15 }} tick={{ fill: 'white', fontSize:12 }} />
            <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft', offset: -15 }} tick={{ fill: 'white', fontSize:12 }} />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="price"  />
        </LineChart>

    );
}

export default PriceChart