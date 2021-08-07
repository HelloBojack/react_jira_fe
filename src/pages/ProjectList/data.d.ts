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
export interface IProjectsTable {
  projectsList: IProjects[];
}

export interface IUser {
  id: number;
  name: string;
  organization: string;
  ownerId: number;
}
