import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { TravelCategoryType } from "./travelCategory";

const useTravelCategory = () => {
  const [travelCategories, setTravelCategories] = useState<
    TravelCategoryType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setTravelCategories).then(() => {
      setLoading(false);
    });
  }, []);

  return { travelCategories, loading };
};

export default useTravelCategory;
