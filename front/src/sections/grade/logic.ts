import axios from "../../axios";
import { GradeType } from "./grade";

export const fetchData = async (callBack: (data: GradeType[]) => void) => {
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
