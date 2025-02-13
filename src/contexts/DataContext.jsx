import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);

  return (
    <DataContext.Provider value={{ movies, setMovies }}>
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(DataContext);
  return context;
}

export { DataProvider, useDataContext };
