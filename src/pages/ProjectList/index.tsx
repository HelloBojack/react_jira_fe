import React, { useState, useEffect } from "react";
import SearchInput from "./components/SearchInput";
import UserTable from "./components/UserTable";
import { CleanObjectNull, useDebounce } from "utils";
import { useHttp } from "utils/http";
const ProjectList = () => {
  const { get } = useHttp();
  const [searchParams, setsearchParams] = useState({
    name: "",
    workname: "",
  });
  const [userList, setuserList] = useState([]);
  const debouncesearchParams = useDebounce(searchParams, 250);
  useEffect(() => {
    get("projects", CleanObjectNull(debouncesearchParams)).then((res) =>
      setuserList(res)
    );
  }, [debouncesearchParams]);
  return (
    <>
      <SearchInput
        searchParams={searchParams}
        setsearchParams={setsearchParams}
      />
      <UserTable userList={userList} />
    </>
  );
};
export default ProjectList;
