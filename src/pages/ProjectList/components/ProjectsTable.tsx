import React from "react";
import { Table } from "antd";
import { IProjectsTable } from "../data";

const columns = [
  {
    title: "工作",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "部门",
    dataIndex: "organization",
    key: "organization",
  },
];

const ProjectsTable = ({ projectsList }: IProjectsTable) => {
  return (
    <>
      <Table
        dataSource={projectsList}
        columns={columns}
        rowKey={(row) => row.id}
      ></Table>
    </>
  );
};
export default ProjectsTable;
