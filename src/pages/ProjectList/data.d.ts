export interface IUser {
  name: string;
  id: string;
  token: string;
}

export interface IUserTable {
  userList: IUser[];
}
