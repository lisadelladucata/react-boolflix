import { createContext, useContext, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);

  return (
    <DataContext.Provider value={{ movies, setMovies, tvs, setTvs }}>
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(DataContext);
  return context;
}

export { DataProvider, useDataContext };
