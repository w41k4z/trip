import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { SubscriptionTierType } from "../subscriptionTier/subscriptionTier";
import useSubscriptionTier from "../subscriptionTier/useSubscriptionTier";
import useActivity from "../activity/useActivity";

const useTierActivity = () => {
  const { activities } = useActivity();
  const { subscriptionTiers } = useSubscriptionTier();
  const [currentTierId, setCurrentTierId] = useState<string>();
  const [subscriptionTierActivities, setSubscriptionTierActivities] =
    useState<SubscriptionTierType>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(currentTierId, setSubscriptionTierActivities).then(() => {
      setLoading(false);
    });
  }, [currentTierId]);

  return {
    activities,
    subscriptionTiers,
    subscriptionTierActivities,
    loading,
    setCurrentTierId,
  };
};

export default useTierActivity;
