import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export default function useAxiosSecure() {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught in interceptror", error);
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout this user");
          signOutUser()
            .then(() => {
              console.log("user logged out from axios");
              navigate("/signIn");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosInstance;
}
