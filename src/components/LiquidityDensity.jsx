import { BarChart, XAxis, YAxis, Tooltip, Bar, ReferenceLine } from "recharts";
import { data } from "../dummyData/data";

const LiquidityDensity = () => {

    const dataLiquidity = data.liquidity_density.liquidity
    const keys = Object.keys(dataLiquidity[0])

    const formatYAxis = (tickItem) => {
        if (tickItem >= 1e12) {
          return `${(tickItem / 1e12).toFixed(1)}T`; // Trillions
        } else if (tickItem >= 1e9) {
          return `${(tickItem / 1e9).toFixed(1)}B`; // Billions
        } else if (tickItem >= 1e6) {
          return `${(tickItem / 1e6).toFixed(1)}M`; // Millions
        }
        return tickItem;
      };

    return (  
        <BarChart width={500} height={400} data={dataLiquidity}
                    margin={{left: 0}} 
        >
            <XAxis dataKey={keys[2]}  tick={false} tickLine={true} />
            <YAxis tickFormatter={formatYAxis} tick={false} tickLine={true} />
            <Tooltip/>
            <Bar dataKey={keys[1]} fill="#8884d8"/>
            <ReferenceLine x={0.0002599581500253149} stroke="red" label={{ value: '', position: 'insideTop', fill: 'red' }}  />
            <ReferenceLine x={0.00032816253113122625} stroke="green" label={{ value: '', position: 'insideTop', fill: 'green' }} />
        </BarChart>
    );
}
 
export default LiquidityDensity;