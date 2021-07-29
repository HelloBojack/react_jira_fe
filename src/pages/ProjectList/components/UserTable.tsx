import React from "react";
import { Table } from "antd";
interface IUser {
  name: string;
  id: string;
}
interface IUserTable {
  userList: IUser[];
}
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
