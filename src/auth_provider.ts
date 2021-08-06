import { IUser, IUserRes } from "pages/ProjectList/data";
const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => {
  return localStorage.getItem(localStorageKey);
};

export const handleUserResponse = ({ user }: { user: IUserRes }) => {
  localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: IUser) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = (data: IUser) => {
  return fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(data);
    }
  });
};
export const logout = async () => localStorage.removeItem(localStorageKey);
