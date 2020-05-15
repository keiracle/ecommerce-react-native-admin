import React, { useState, useEffect, useContext } from "react";
import { profile } from "../services/userService";

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // const getProfileFromServer = async () => {
    //   const { data } = await profile();
    //   setUser(data);
    // };
    // getProfileFromServer();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
