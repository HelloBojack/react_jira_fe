import { Select } from "antd";
import { ISearchInput } from "../data";
const { Option } = Select;

export const UserSelect = ({
  searchParams,
  setsearchParams,
  userList,
}: ISearchInput) => {
  return (
    <Select<string>
      style={{ width: 120 }}
      onChange={(e) => setsearchParams({ ...searchParams, personId: e || "" })}
      allowClear
    >
      {userList.map((user) => (
        <Option value={String(user.id)} key={user.id}>
          {user.name}
        </Option>
      ))}
    </Select>
  );
};
