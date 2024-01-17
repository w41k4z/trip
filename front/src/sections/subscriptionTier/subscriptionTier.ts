import { ActivityType } from "../activity/activity";

export type SubscriptionTierType = {
  id: number;
  name: string;
  description: string;
  activities?: ActivityType[];
};
