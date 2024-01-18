import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import usePosition from "../position/usePosition";
import { PositionType } from "../position/position";

const usePositionGrade = () => {
  const { positions } = usePosition();
  const [currentPosistionId, setCurrentPosistionId] = useState<string>();
  const [positionGrades, setPositionGrades] = useState<PositionType>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(currentPosistionId, setPositionGrades).then(() => {
      setLoading(false);
    });
  }, [currentPosistionId]);

  return {
    positions,
    setCurrentPosistionId,
    positionGrades,
    loading,
  };
};

export default usePositionGrade;
