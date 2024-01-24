import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { Grade } from "./type";

const useGrade = () => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setGrades).then(() => {
      setLoading(false);
    });
  }, []);

  return {
    grades,
    loading,
  };
};

export default useGrade;
