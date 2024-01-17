import axios from "../../axios";
import { TravelActivityType } from "./travelActivity";

export const fetchData = async (
  callBack: (data: TravelActivityType[]) => void
) => {
  await axios
    .get("/travel-activities")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addTravelActivity = async (data: any) => {
  await axios
    .post("/travel-activities", data)
    .then((response) => {
      alert("Travel activity count added");
    })
    .catch((error) => {
      alert(error);
    });
};
