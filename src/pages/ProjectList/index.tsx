import { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import ProjectsTable from "./components/ProjectsTable";
import { CleanObjectNull, useDebounce } from "utils";
import { useHttp } from "utils/http";
import { PageHeader } from "antd";
import { IUser } from "./data";
const ProjectList = () => {
  const { get } = useHttp();
  const [loading, setLoading] = useState(false);
  const [searchParams, setsearchParams] = useState({
    name: "",
    personId: "",
  });
  const [userList, setUserList] = useState<IUser[]>([]);
  const [projectsList, setuserList] = useState([]);
  const debouncesearchParams = useDebounce(searchParams, 250);
  useEffect(() => {
    get("users").then((res) => setUserList(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setLoading(true);
    get("projects", CleanObjectNull(debouncesearchParams))
      .then((res) => setuserList(res))
      .catch((err) => {
        setuserList([]);
      })
      .finally(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncesearchParams]);
  return (
    <>
      <PageHeader title="项目列表" />
      <SearchInput
        searchParams={searchParams}
        setsearchParams={setsearchParams}
        userList={userList}
      />
      <ProjectsTable
        dataSource={projectsList}
        userList={userList}
        loading={loading}
      />
    </>
  );
};
export default ProjectList;
