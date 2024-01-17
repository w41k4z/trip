import axios from "../../axios";
import { TravelCategoryType } from "./travelCategory";

export const fetchData = async (
  callBack: (data: TravelCategoryType[]) => void
) => {
  await axios
    .get("/travel-categories")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addTravelCategory = async (data: any) => {
  await axios
    .post("/travel-categories", data)
    .then((response) => {
      alert("Travel category added");
    })
    .catch((error) => {
      alert(error);
    });
};
