import React, { useContext, useEffect, useState } from "react";
import * as auth from "auth_provider";
import { IUser, IUserRes } from "pages/ProjectList/data";
const AuthContext = React.createContext<
  | {
      user: IUserRes | null;
      login: (data: IUser) => Promise<void>;
      register: (data: IUser) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
// displayName 用于 DevTool
AuthContext.displayName = "AuthContext";
const apiUrl = process.env.REACT_APP_API_URL;
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUserRes | null>(null);
  // const { get } = useHttp();
  // user => setUser(user) => setUser
  const login = (data: IUser) => auth.login(data).then((user) => setUser(user));
  const register = (data: IUser) => auth.register(data).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
  const initUser = async () => {
    const token = auth.getToken();
    if (token) {
      fetch(`${apiUrl}/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        let user = data.user;
        setUser(user);
      });
    }
  };
  useEffect(() => {
    initUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, login, register, logout }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在 AuthProvider 中使用");
  }
  return context;
};
