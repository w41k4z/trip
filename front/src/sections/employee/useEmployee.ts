import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { EmployeeType } from "./employee";
import usePosition from "../position/usePosition";

const useEmployee = () => {
  const { positions } = usePosition();
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setEmployees).then(() => {
      setLoading(false);
    });
  }, []);

  return { positions, employees, loading };
};

export default useEmployee;
