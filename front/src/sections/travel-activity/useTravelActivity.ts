import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { fetchTierById } from "../tier-activity/logic";
import { TravelActivityType } from "./travelActivity";
import useTravel from "../travel/useTravel";
import { SubscriptionTierType } from "../subscriptionTier/subscriptionTier";

const useTravelActivity = () => {
  const { travels } = useTravel();
  const [currentSubscriptionTierId, setCurrentSubscriptionTierId] =
    useState<string>();
  const [subscriptionTier, setSubscriptionTier] =
    useState<SubscriptionTierType>();
  useEffect(() => {
    console.log("currentSubscriptionTierId", currentSubscriptionTierId);
    fetchTierById(currentSubscriptionTierId, setSubscriptionTier);
  }, [currentSubscriptionTierId]);
  const [travelActivities, setTravelActivities] = useState<
    TravelActivityType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setTravelActivities).then(() => {
      setLoading(false);
    });
  }, []);

  return {
    travels,
    subscriptionTier,
    setCurrentSubscriptionTierId,
    travelActivities,
    loading,
  };
};

export default useTravelActivity;
