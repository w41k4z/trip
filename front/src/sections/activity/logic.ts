import axios from "../../axios";
import { ActivityType } from "./activity";

export const fetchData = async (callBack: (data: ActivityType[]) => void) => {
  await axios
    .get("/activities")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addActivity = async (data: any) => {
  await axios
    .post("/activities", data)
    .then((response) => {
      alert("Activity added");
    })
    .catch((error) => {
      alert(error);
    });
};

export const addActivityPrice = async (data: any) => {
  await axios
    .post("/activities/price", data)
    .then((response) => {
      alert("Activity price added");
    })
    .catch((error) => {
      alert(error);
    });
};
