import { Table } from "antd";
import { data } from "../../dummyData/data";

const TableData = () => {
    const rows = [data.table]
    const keys = Object.keys(data.table)
    console.log(keys[0])
    const collums = [
        {
            title:'APR',
            dataIndex: keys[0],
            key:keys[0]
        },
        {
            title:'APR',
            dataIndex:keys[1],
            key:keys[1]
        },
        {
            title:'APR',
            dataIndex:keys[2],
            key:keys[2]
        },
        {
            title:'APR',
            dataIndex:keys[3],
            key:keys[3]
        },
        {
            title:'APR',
            dataIndex:keys[4],
            key:keys[4]
        },
        {
            title:'APR',
            dataIndex:keys[5],
            key:keys[5]
        }
    ]
    return (  
        <Table dataSource={rows} columns={collums}/>
    );
}
 
export default TableData;