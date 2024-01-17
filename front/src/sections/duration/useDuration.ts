import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { DurationType } from "./duration";

const useDuration = () => {
  const [durations, setActivities] = useState<DurationType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setActivities).then(() => {
      setLoading(false);
    });
  }, []);

  return { durations, loading };
};

export default useDuration;
