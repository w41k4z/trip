import { DurationType } from "../duration/duration";
import { SubscriptionTierType } from "../subscriptionTier/subscriptionTier";
import { TravelCategoryType } from "../travel-category/travelCategory";

export type TravelType = {
  id: number;
  name: string;
  travelCategory?: TravelCategoryType;
  categoryName: string;
  duration?: DurationType;
  durationName: string;
  subscriptionTier?: SubscriptionTierType;
  subscriptionTierName: string;
  salePrice: number;
  totalPrice: number;
  profit: number;
};
