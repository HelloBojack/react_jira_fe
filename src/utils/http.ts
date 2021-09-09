import { message } from "antd";
import { useAuth } from "context/auth_context";
import qs from "qs";
import { useCallback } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
interface httpConfig {
  method: string;
  body?: string;
  headers: {
    Authorization: string;
    "Content-Type": string;
  };
}
export const useHttp = () => {
  let { user, logout } = useAuth();
  const init = useCallback(
    (method: string, path: string, data?: object) => {
      let config: httpConfig = {
        method,
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      };

      switch (method.toUpperCase()) {
        case "GET":
          path += `?${qs.stringify(data)}`;
          break;
        case "POST":
        case "PATCH":
          config.body = JSON.stringify(data);
          break;
      }

      return fetch(`${apiUrl}/${path}`, config).then(async (res) => {
        if (res.status === 401) {
          await logout();
          window.location.reload();
          return Promise.reject({ message: "登录已失效，请重新登录" });
        }
        let result = await res.json();
        if (res.ok) {
          return result;
        } else {
          message.error(result.message);
          return Promise.reject(result);
        }
      });
    },
    [logout, user]
  );
  const get = useCallback(
    (path: string, data?: object) => {
      return init("GET", path, data);
    },
    [init]
  );
  const post = useCallback(
    (path: string, data: object) => {
      return init("POST", path, data);
    },
    [init]
  );
  const patch = useCallback(
    (path: string, data: object) => {
      return init("PATCH", path, data);
    },
    [init]
  );
  return { get, post, patch };
};
