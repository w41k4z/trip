import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { GradeType } from "./grade";

const useGrade = () => {
  const [grades, setGrades] = useState<GradeType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setGrades).then(() => {
      setLoading(false);
    });
  }, []);

  return { grades, loading };
};

export default useGrade;
