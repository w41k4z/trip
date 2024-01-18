import { Helmet } from "react-helmet-async";
import { TravelEmployeeView } from "../sections/travel-employee/view";

const TravelEmployee = () => {
  return (
    <>
      <Helmet>
        <title>Employés de voyage</title>
      </Helmet>
      <TravelEmployeeView />
    </>
  );
};

export default TravelEmployee;
