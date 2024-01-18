import { Helmet } from "react-helmet-async";
import { TravelEmployeeView } from "../sections/travel-employee/view";

const TravelEmployee = () => {
  return (
    <>
      <Helmet>
        <title>Employé de voyage</title>
      </Helmet>
      <TravelEmployeeView />
    </>
  );
};

export default TravelEmployee;
