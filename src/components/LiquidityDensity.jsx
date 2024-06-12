import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";
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
        <BarChart width={1000} height={500} data={dataLiquidity}
                    margin={{left: 50}} 
        >
            <XAxis dataKey={keys[0]} tick={{ fill: 'white', fontSize:'13' }} />
            <YAxis tickFormatter={formatYAxis} tick={{ fill: 'white', fontSize:'13' }} />
            <Tooltip/>
            <Bar dataKey={keys[1]} fill="#8884d8"/>
        </BarChart>
    );
}
 
export default LiquidityDensity;