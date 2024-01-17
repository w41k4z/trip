import { Helmet } from "react-helmet-async";
import { TierActivityView } from "../sections/tier-activity/view";

const TierActivity = () => {
  return (
    <>
      <Helmet>
        <title>Activités de bouquet</title>
      </Helmet>
      <TierActivityView />
    </>
  );
};

export default TierActivity;
