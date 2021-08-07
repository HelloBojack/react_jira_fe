import { useAuth } from "context/auth_context";
import qs from "qs";
const apiUrl = process.env.REACT_APP_API_URL;

export const useHttp = () => {
  let { user, logout } = useAuth();
  const init = (method: string, path: string, data?: object) => {
    let config = {
      method,
      headers: {
        Authorization: `Bearer ${user?.token}`,
        "Content-Type": "application/json",
      },
    };
    if (method.toUpperCase() === "GET") {
      path += `?${qs.stringify(data)}`;
    } else {
      // config.body = JSON.stringify(data);
    }
    return fetch(`${apiUrl}/${path}`, config).then(async (res) => {
      if (res.status === 401) {
        await logout();
        window.location.reload();
        return Promise.reject({ message: "登录已失效，请重新登录" });
      }
      if (res.ok) {
        return await res.json();
      } else {
        return Promise.reject(res.json());
      }
    });
  };
  const get = (path: string, data?: object) => {
    return init("GET", path, data);
  };
  const post = (path: string, data: object) => {
    init("POST", path, data);
  };
  return { get, post };
};
