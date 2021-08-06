import React from "react";
import { Table } from "antd";
import { IUserTable } from "../data";

const columns = [
  {
    title: "工作",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "组织",
    dataIndex: "organization",
    key: "organization",
  },
];

const UserTable = ({ userList }: IUserTable) => {
  return (
    <>
      <Table
        dataSource={userList}
        columns={columns}
        rowKey={(row) => row.id}
      ></Table>
    </>
  );
};
export default UserTable;
