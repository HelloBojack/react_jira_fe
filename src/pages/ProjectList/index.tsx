import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import ProjectsTable from "./components/ProjectsTable";
import { CleanObjectNull, useDebounce, useTitle } from "utils";
import { useHttp } from "utils/http";
import { PageHeader } from "antd";
// import { IUser } from "./data";
import { useAsync } from "utils/use_async";
import { useMount } from "../../utils/use_mount";
import { Content } from "antd/lib/layout/layout";
const ProjectList = () => {
  useTitle("项目列表");
  const { get } = useHttp();
  const [searchParams, setsearchParams] = useState({
    name: "",
    personId: "",
  });
  const debouncesearchParams = useDebounce(searchParams, 250);
  const {
    execute: getProjectList,
    value: projectsList,
    loading,
  } = useAsync(() => get("projects", CleanObjectNull(debouncesearchParams)));
  const { execute: getUserList, value: userList } = useAsync(() =>
    get("users")
  );

  useMount(() => getUserList());

  useEffect(() => {
    getProjectList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncesearchParams]);

  return (
    <Content
      style={{
        margin: 0,
        background: "#fff",
        padding: "0 24px",
      }}
    >
      <PageHeader title="项目列表" />
      <SearchInput
        searchParams={searchParams}
        setsearchParams={setsearchParams}
        userList={userList || []}
      />
      <ProjectsTable
        dataSource={projectsList || []}
        userList={userList || []}
        loading={loading}
      />
    </Content>
  );
};
export default ProjectList;
