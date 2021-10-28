import { Button } from "antd";
import { Table } from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { IProjects, IProjectsTable } from "../data";
import FavStar from "./FavStar";
import { useEditProject } from "../useHooks/index";
import { useSetRecoilState } from "recoil";
import { ModalState } from "store";

const ProjectsTable = ({
  userList,
  getProjectList,
  ...props
}: IProjectsTable) => {
  let navigate = useNavigate();
  const { execute: favProject } = useEditProject();
  const setModal = useSetRecoilState(ModalState);
  const columns = [
    {
      title: <FavStar checked={true} disabled={true} />,
      render: (item: IProjects) => (
        <FavStar
          checked={item.pin}
          onCheckedChange={() => {
            favProject({ id: item.id, pin: !item.pin });
            getProjectList();
          }}
        />
      ),
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
      render: (item: IProjects) => {
        return (
          <>
            <Button onClick={() => navigate(`/project/${item.id}`)}>
              操作
            </Button>
            <Button onClick={() => setModal(true)} style={{ marginLeft: 20 }}>
              编辑
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table columns={columns} rowKey={(row) => row.id} {...props} />
    </>
  );
};
export default ProjectsTable;
