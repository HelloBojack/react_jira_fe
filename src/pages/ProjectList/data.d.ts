import { TableProps } from "antd/lib/table";

export interface IProjects {
  username: string;
  id: string;
  token: string;
  pin: boolean;
}
export interface IProjectsRes {
  name: string;
  personId: string;
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

export interface ISearchInput {
  searchParams: Pick<IProjectsRes, "name" | "personId">;
  setsearchParams: (searchParams: ISearchInput["searchParams"]) => void;
  userList: IUser[];
}
