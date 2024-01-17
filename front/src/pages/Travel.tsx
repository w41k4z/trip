import { Helmet } from "react-helmet-async";
import { TravelView } from "../sections/travel/view";

const Travel = () => {
  return (
    <>
      <Helmet>
        <title>Voyages</title>
      </Helmet>
      <TravelView />
    </>
  );
};

export default Travel;
