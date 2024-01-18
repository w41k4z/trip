import { EmployeeType } from "../employee/employee";

export type TravelEmployeeType = {
  id: number;
  tarvelId: number;
  employeeId: number;
  employee: EmployeeType;
  employeeName: string;
  employeeFirstName: string;
  employeePositionGrade: string;
  duration: number;
};
