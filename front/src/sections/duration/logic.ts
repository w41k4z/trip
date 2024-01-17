import axios from "../../axios";
import { DurationType } from "./duration";

export const fetchData = async (callBack: (data: DurationType[]) => void) => {
  await axios
    .get("/durations")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addDuration = async (data: any) => {
  await axios
    .post("/durations", data)
    .then((response) => {
      alert("Duration added");
    })
    .catch((error) => {
      alert(error);
    });
};
