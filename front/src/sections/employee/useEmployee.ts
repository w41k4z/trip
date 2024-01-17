import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { EmployeeType } from "./employee";
import useGrade from "../grade/useGrade";

const useEmployee = () => {
  const { grades } = useGrade();
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setEmployees).then(() => {
      setLoading(false);
    });
  }, []);

  return { grades, employees, loading };
};

export default useEmployee;
