import { Helmet } from "react-helmet-async";
import { EmployeeView } from "../sections/employee/view";

const Employee = () => {
  return (
    <>
      <Helmet>
        <title>Employée</title>
      </Helmet>
      <EmployeeView />
    </>
  );
};

export default Employee;
