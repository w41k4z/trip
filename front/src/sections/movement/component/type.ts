import { ActivityType } from "../../activity/activity";

export type StockState = {
  activity: ActivityType;
  activityName: string;
  remainingQuantity: number;
};
