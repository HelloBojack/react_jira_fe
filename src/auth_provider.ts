import { IUser } from "./pages/ProjectList/data";
const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

export const getToken = () => {
  localStorage.getItem(localStorageKey);
};

export const handleUserResponse = ({ user }: { user: IUser }) => {
  localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: IUser) => {
  fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
  });
};

export const register = (data: IUser) => {
  fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    }
  });
};
export const logout = () => localStorage.removeItem(localStorageKey);
