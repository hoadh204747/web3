import { BarChart, XAxis, YAxis, Tooltip, Bar, ReferenceLine } from "recharts";
import { data } from "../dummyData/data";

const FeesChart = () => {

    const pivotData = data.pivotData
    const keys = Object.keys(pivotData[0])
    return (  
        <BarChart width={1000} height={400} data={pivotData}
                    margin={{left: 0}} 
        >
            <XAxis dataKey={keys[0]}  tick={true} tickLine={true} />
            <YAxis  tick={true} tickLine={true} />
            <Tooltip position={{y: 20, x: 70}}/>
            <Bar dataKey={keys[4]} fill="#8884d8"/>
            <ReferenceLine x={0.0002599581500253149} stroke="red" label={{ value: '', position: 'insideTop', fill: 'red' }}  />
            <ReferenceLine x={0.00032816253113122625} stroke="green" label={{ value: '', position: 'insideTop', fill: 'green' }} />
        </BarChart>
    );
}
 
export default FeesChart;