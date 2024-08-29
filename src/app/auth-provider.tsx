'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define the User interface
interface User {
  name: string;
  password: string;
  token?: string;
  avatar?: string;
  email?: string;
  _id?: string;
}

// Define the AuthContextProps interface
interface AuthContextProps {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextProps>({
  auth: false,
  setAuth: () => {},
  user: undefined,
  setUser: () => {}
});

// Define the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
    setUser(userInfo);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => useContext(AuthContext);

// export const useAuth= ():AuthContextProps=>useContext(AuthContext)