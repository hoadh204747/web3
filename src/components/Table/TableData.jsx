import { Table } from "antd";

const TableData = (table) => {

    const rows = [table.table]
    const keys = Object.keys(table.table)
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