import { useState, useEffect } from "react";
import { fetchData } from "./logic";
import { SubscriptionTierType } from "./subscriptionTier";

const useSubscriptionTier = () => {
  const [subscriptionTiers, setSubscriptionTiers] = useState<
    SubscriptionTierType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetchData(setSubscriptionTiers).then(() => {
      setLoading(false);
    });
  }, []);

  return { subscriptionTiers, loading };
};

export default useSubscriptionTier;
