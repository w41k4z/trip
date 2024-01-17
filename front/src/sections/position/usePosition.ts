import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { PositionType } from "./position";

const usePosition = () => {
  const [positions, setPositions] = useState<PositionType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setPositions).then(() => {
      setLoading(false);
    });
  }, []);

  return { positions, loading };
};

export default usePosition;
