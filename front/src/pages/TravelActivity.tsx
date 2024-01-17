import { Helmet } from "react-helmet-async";
import { TravelActivityView } from "../sections/travel-activity/view";

const TravelActivity = () => {
  return (
    <>
      <Helmet>
        <title>Activité des voyages</title>
      </Helmet>
      <TravelActivityView />
    </>
  );
};

export default TravelActivity;
