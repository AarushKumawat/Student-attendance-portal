"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: "",
    user: {
      
      name: "",
      email: ""
      
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setAuthState({ token: token || "", user });
  }, []);

  const setUserAuthInfo = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    setAuthState(data);
  };

  const isUserAuthenticated = () => {
    return !!authState.token;
  };

  return (
    <Provider
      value={{
        authState,
        setUserAuthInfo,
        isUserAuthenticated,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthProvider, useAuth };