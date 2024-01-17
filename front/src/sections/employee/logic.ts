import axios from "../../axios";
import { EmployeeType } from "./employee";

export const fetchData = async (callBack: (data: EmployeeType[]) => void) => {
  await axios
    .get("/employees")
    .then((response) => {
      callBack(response.data);
    })
    .catch((error) => {
      alert(error);
    });
};

export const addEmployee = async (data: any) => {
  await axios
    .post("/employees", data)
    .then((response) => {
      alert("Employee added");
    })
    .catch((error) => {
      alert(error);
    });
};
