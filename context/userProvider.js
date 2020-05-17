import React, { useState, useEffect } from "react";
import * as authService from "../services/authService";
import { Toast } from "native-base";
import Axios from "axios";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({ token: "" });

  useEffect(() => {
    // const getProfileFromServer = async () => {
    //   const { data } = await profile();
    //   setUser(data);
    // };
    // getProfileFromServer();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await authService.login(username, password);
      setUser({ token: response.data.token });
      return response;
    } catch (error) {
      Toast.show({
        text: error.message,
        buttonText: "Okay",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser({ token: "" });
    } catch (error) {
      Toast.show({
        text: error.message,
        buttonText: "Okay",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ user, onLogin: handleLogin, onLogout: handleLogout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
