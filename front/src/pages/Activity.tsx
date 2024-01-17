import { Helmet } from "react-helmet-async";
import { ActivityView } from "../sections/activity/view";

const Activity = () => {
  return (
    <>
      <Helmet>
        <title>Activités</title>
      </Helmet>
      <ActivityView />
    </>
  );
};

export default Activity;
