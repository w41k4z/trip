import axios from "../../axios";
import { Grade } from "./type";

export const fetchData = async (callBack: (data: Grade[]) => void) => {
  await axios
    .get("/grades")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addGrade = async (data: any) => {
  await axios
    .post("/grades", data)
    .then((response) => {
      alert("Grade added");
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateGrade = async (data: any) => {
  await axios
    .put("/grades", data)
    .then((response) => {
      alert("Grade updated");
    })
    .catch((error) => {
      alert(error);
    });
};
