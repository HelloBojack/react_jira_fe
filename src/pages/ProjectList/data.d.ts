import { TableProps } from "antd/lib/table";

export interface IProjects {
  username: string;
  id: string;
  token: string;
}
export interface IProjectsRes {
  name: string;
  id: string;
  token: string;
}
export interface IProjectsTable extends TableProps<IProjects> {
  userList: IUser[];
}

export interface IUser {
  item: number;
  id: number;
  name: string;
  organization: string;
  ownerId: number;
}
