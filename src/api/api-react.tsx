import React, {
  createContext,
  useRef,
  useState,
  useEffect,
  useContext,
} from "react";
import { API, Employee } from "./api";
import sampleData from "./sample_data.json";

interface APIContext {
  employees: Employee[];
  api?: API;
}

const APIContext = createContext<APIContext>({
  employees: [],
});

/**
 * API Context provider.
 *
 * Custom provider that subscribes to api and allows using
 * API in the nested components.
 *
 * Real-world implementation would be much more complex,
 * this is a very basic example that stores api instance
 * in a ref.
 */
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

/**
 * A custom hook that uses API from the context.
 */
export function useAPI() {
  const context = useContext(APIContext);

  return context;
}
