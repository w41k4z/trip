import axios from "../../axios";
import { SubscriptionTierType } from "./subscriptionTier";

export const fetchData = async (
  callBack: (data: SubscriptionTierType[]) => void
) => {
  await axios
    .get("/subscription-tiers")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addSubscriptionTier = async (data: any) => {
  await axios
    .post("/subscription-tiers", data)
    .then((response) => {
      alert("Subscription tier added");
    })
    .catch((error) => {
      alert(error);
    });
};
