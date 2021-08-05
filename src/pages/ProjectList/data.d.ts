export interface IUser {
  username: string;
  id: string;
  token: string;
}
export interface IUserRes {
  name: string;
  id: string;
  token: string;
}
export interface IUserTable {
  userList: IUser[];
}
