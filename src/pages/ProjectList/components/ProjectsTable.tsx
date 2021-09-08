import { Button } from "antd";
import { Table } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { IProjects, IProjectsTable } from "../data";
import FavStar from "./FavStar";

const ProjectsTable = ({ userList, ...props }: IProjectsTable) => {
  let navigate = useNavigate();
  const columns = [
    {
      title: <FavStar checked={true} disabled={true} />,
      render: (item: IProjects) => <FavStar checked={item.pin} />,
    },
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
    {
      title: "操作",
      render: (item: IProjects) => (
        <Button onClick={() => navigate(`/project/${item.id}`)}>操作</Button>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} rowKey={(row) => row.id} {...props} />
    </>
  );
};
export default ProjectsTable;
