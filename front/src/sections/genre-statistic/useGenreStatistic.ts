import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { TravelGenreStatistic } from "./type";
import useTravel from "../travel/useTravel";

const useGenreStatistic = () => {
  const { travels } = useTravel();
  const [currentTravelId, setCurrentTravelId] = useState<string>("-1");
  const [genreStatistics, setGenreStatistics] = useState<
    TravelGenreStatistic[]
  >([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setGenreStatistics, currentTravelId).then(() => {
      setLoading(false);
    });
  }, [currentTravelId]);

  return {
    setCurrentTravelId,
    travels,
    genreStatistics,
    loading,
  };
};

export default useGenreStatistic;
