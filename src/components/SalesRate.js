import React from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "email",
    dataIndex: "email",
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    email: `abc@gmail.com`,
  });
}

const SalesRate = () => {
  return (
    <Table
      className="table_content"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 50,
      }}
      scroll={{
        y: 240,
      }}
    />
  );
};

export default SalesRate;
