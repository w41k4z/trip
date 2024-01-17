import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import useSubscriptionTier from "../subscriptionTier/useSubscriptionTier";
import useDuration from "../duration/useDuration";
import useTravelCategory from "../travel-category/useTravelCategory";
import { TravelType } from "./travel";

const useTravel = () => {
  const { subscriptionTiers } = useSubscriptionTier();
  const { durations } = useDuration();
  const { travelCategories } = useTravelCategory();
  const [travels, setTravels] = useState<TravelType[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setTravels).then(() => {
      setLoading(false);
    });
  }, []);

  return {
    subscriptionTiers,
    durations,
    travelCategories,
    travels,
    loading,
  };
};

export default useTravel;
