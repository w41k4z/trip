import axios from "../../axios";
import { SubscriptionTierType } from "../subscriptionTier/subscriptionTier";

export const fetchData = (
  currentTierId: string | undefined,
  callBack: (data: SubscriptionTierType) => void
) => {
  return fetchTierById(currentTierId, callBack);
};

export const fetchTierById = async (
  currentTierId: string | undefined,
  callBack: (data: SubscriptionTierType) => void
) => {
  if (!currentTierId) {
    return;
  }
  await axios
    .get(`/subscription-tiers/${currentTierId}`)
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addTierActivity = async (data: any) => {
  await axios
    .post("/tier-activities", data)
    .then((response) => {
      alert("Tier activity added");
    })
    .catch((error) => {
      alert(error);
    });
};
