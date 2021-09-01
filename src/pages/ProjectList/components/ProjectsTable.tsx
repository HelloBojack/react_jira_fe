import { Table } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { IProjectsTable } from "../data";

const ProjectsTable = ({ userList, ...props }: IProjectsTable) => {
  let navigate = useNavigate();
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
    {
      title: "负责人",
      dataIndex: "personId",
      key: "personId",
      render: (item: number) => userList.find((user) => user.id === item)?.name,
    },
    {
      title: "创建时间",
      dataIndex: "created",
      key: "created",
      render: (item: number) => dayjs(item).format("YYYY-MM-DD HH:mm:ss"),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        rowKey={(row) => row.id}
        onRow={(record) => {
          return {
            onClick: () => {
              console.log(record.id);
              navigate(`/project/${record.id}/TaskBoard`);
            },
          };
        }}
        {...props}
      />
    </>
  );
};
export default ProjectsTable;
