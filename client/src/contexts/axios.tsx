import React from "react";
import axios, { AxiosInstance } from "axios";

const AxiosContext = React.createContext<AxiosInstance | null>(null);

export const AxiosContextProvider: React.FC = ({ children }) => {
  const client = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (
    <AxiosContext.Provider value={client}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = React.useContext(AxiosContext);

  if (!context) {
    throw new Error("Context should be provided before use.");
  }

  return context;
};
