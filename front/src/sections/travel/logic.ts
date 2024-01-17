import axios from "../../axios";
import { TravelType } from "./travel";

export const fetchData = async (callBack: (data: TravelType[]) => void) => {
  await axios
    .get("/travels")
    .then((response) => {
      const customizedData = response.data.map((travel: TravelType) => {
        return {
          ...travel,
          durationName: travel.duration?.label,
          categoryName: travel.travelCategory?.category,
          subscriptionTierName: travel.subscriptionTier?.name,
        };
      });
      callBack(customizedData);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addTravel = async (data: any) => {
  await axios
    .post("/travels", data)
    .then((response) => {
      alert("Travel added");
    })
    .catch((error) => {
      alert(error);
    });
};
