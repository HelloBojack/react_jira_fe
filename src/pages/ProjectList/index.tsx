import { useCallback, useEffect, useMemo } from "react";
import SearchInput from "./components/SearchInput";
import ProjectsTable from "./components/ProjectsTable";
import { CleanObjectNull, useDebounce, useTitle } from "utils";
import { useHttp } from "utils/http";
import { PageHeader } from "antd";
import { useAsync } from "utils/use_async";
import { useMount } from "../../utils/use_mount";
import { Content } from "antd/lib/layout/layout";
import { useUrlQueryParams } from "utils/use_UrlQueryParams";
const ProjectList = () => {
  useTitle("项目列表");

  const { get } = useHttp();
  const [searchParams, setsearchParams] = useUrlQueryParams(
    useMemo(() => ["name", "personId"], [])
  );
  const debouncesearchParams = useDebounce(searchParams, 250);
  const getrProjects = useCallback(
    () => get("projects", CleanObjectNull(debouncesearchParams)),
    [debouncesearchParams, get]
  );
  const {
    execute: getProjectList,
    value: projectsList,
    loading,
  } = useAsync(getrProjects);
  const { execute: getUserList, value: userList } = useAsync(
    useCallback(() => get("users"), [get])
  );

  useMount(useCallback(() => getUserList(), [getUserList]));

  useEffect(() => {
    getProjectList();
  }, [debouncesearchParams, getProjectList]);

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
        getProjectList={getProjectList}
        loading={loading}
      />
    </Content>
  );
};
export default ProjectList;
