import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { EmployeeType } from "./employee";
import { PositionGradeType } from "../position-grade/positionGrade";
import { fetchPositionsGrades } from "../position-grade/logic";

const useEmployee = () => {
  const [positionsGrades, setPositionsGrades] = useState<PositionGradeType[]>();
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchPositionsGrades(setPositionsGrades);
    fetchData(setEmployees).then(() => {
      setLoading(false);
    });
  }, []);

  return { positionsGrades, employees, loading };
};

export default useEmployee;
