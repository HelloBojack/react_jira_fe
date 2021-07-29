import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import UserTable from './components/UserTable';
import qs from 'qs'
import { CleanObjectNull, useDebounce } from 'utils'
const ProjectList = () => {
  const [searchParams, setsearchParams] = useState({});
  const [userList, setuserList] = useState([]);
  const debouncesearchParams = useDebounce(searchParams, 250)
  useEffect(() => {
    fetch('/users?' + qs.stringify(CleanObjectNull(debouncesearchParams))).then(async res => {
      if (res.ok) {
        setuserList(await res.json())
      }
    })
  }, [debouncesearchParams])
  return <>
    <SearchInput searchParams={searchParams} setsearchParams={setsearchParams} />
    <UserTable userList={userList} />
  </>
}
export default ProjectList;