import axios from "../../axios";
import { PositionType } from "../position/position";
import { PositionGradeType } from "./positionGrade";

export const fetchPositionsGrades = async (
  callBack: (data: PositionGradeType[]) => void
) => {
  await axios
    .get("/positions/grades")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const fetchData = async (
  currentPositionId: string | undefined,
  callBack: (data: PositionType) => void
) => {
  return fetchPositionById(currentPositionId, callBack);
};

export const fetchPositionById = async (
  currentPositionId: string | undefined,
  callBack: (data: PositionType) => void
) => {
  if (!currentPositionId) {
    return;
  }
  await axios
    .get(`/positions/${currentPositionId}`)
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addPositionGrade = async (data: any) => {
  await axios
    .post("/positions/grades", data)
    .then((response) => {
      alert("Position grade added");
    })
    .catch((error) => {
      alert(error);
    });
};
