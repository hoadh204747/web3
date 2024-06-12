import { Table } from "antd";
import { data } from "../../dummyData/data";

const TableData = () => {
    const rows = [data.table]
    const keys = Object.keys(data.table)
    console.log(keys[0])
    const collums = keys.map(key => ({
        title: key,
        dataIndex: key,
        key: key
    }));
    return (  
        <Table dataSource={rows} columns={collums} pagination={false}/>
    );
}
 
export default TableData;