import { PositionGradeType } from "../position-grade/positionGrade";

export type PositionType = {
  id: number;
  name: string;
  positionGrades?: PositionGradeType[];
};
