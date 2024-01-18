import axios from "../../axios";
import { TravelEmployeeType } from "./travelEmployee";

export const fetchData = async (
  currentTravelId: string | undefined,
  callBack: (data: TravelEmployeeType[]) => void
) => {
  return fetchEmployeesByTravelId(currentTravelId, callBack);
};

export const fetchEmployeesByTravelId = async (
  currentTravelId: string | undefined,
  callBack: (data: TravelEmployeeType[]) => void
) => {
  if (!currentTravelId) {
    return;
  }
  await axios
    .get(`/travels/${currentTravelId}/employees`)
    .then((response) => {
      const data = response.data;
      data.forEach((travelEmployee: TravelEmployeeType) => {
        travelEmployee.employeeFirstName = travelEmployee.employee.name;
        travelEmployee.employeeName = travelEmployee.employee?.name;
        travelEmployee.employeePositionGrade =
          travelEmployee.employee.positionGrade;
      });
      console.log(data);
      callBack(data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addTravelEmployee = async (data: any) => {
  await axios
    .post("/travels/employees", data)
    .then((response) => {
      alert("Travel employee added");
    })
    .catch((error) => {
      alert(error);
    });
};
