import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import { API, Employee } from "./api";
import sampleData from "./sample_data.json";

interface Context {
  employees: Employee[];
  api?: API;
}

const APIContext = createContext<Context>({
  employees: [],
});

export const Provider: React.SFC = ({ children }) => {
  const apiRef = useRef<API>();
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    apiRef.current = new API(sampleData);
    const unsubscribe = apiRef.current.subscribe((employees) => {
      setEmployees(employees);
    });

    return unsubscribe;
  }, [setEmployees]);

  return (
    <APIContext.Provider
      value={{
        employees,
        api: apiRef.current ? apiRef.current : undefined,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

/** A hook that integrates employees API and react */
export function useAPI() {
  const context = useContext(APIContext);

  return context;
}
