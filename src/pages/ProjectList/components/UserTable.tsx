import React from "react";
import { Table } from "antd";
import { IUserTable } from "../data";

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "工作",
    dataIndex: "workname",
    key: "workname",
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
