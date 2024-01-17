import axios from "../../axios";
import { PositionType } from "./position";
import { PositionGradeType } from "../position-grade/positionGrade";

export const fetchData = async (callBack: (data: PositionType[]) => void) => {
  await axios
    .get("/positions")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addPosition = async (data: any) => {
  await axios
    .post("/positions", data)
    .then((response) => {
      alert("Position added");
    })
    .catch((error) => {
      alert(error);
    });
};
