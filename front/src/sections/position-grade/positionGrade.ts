import { PositionType } from "../position/position";

export type PositionGradeType = {
  id: number;
  position: PositionType;
  grade: string;
  increase: number;
};
