import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { EmployeeType } from "./employee";
import usePosition from "../position/usePosition";

const useEmployee = () => {
  const { positionGrades } = usePosition();
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setEmployees).then(() => {
      setLoading(false);
    });
  }, []);

  return { positionGrades, employees, loading };
};

export default useEmployee;
