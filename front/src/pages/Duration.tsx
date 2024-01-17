import { Helmet } from "react-helmet-async";
import { DurationView } from "../sections/duration/view";

const Duration = () => {
  return (
    <>
      <Helmet>
        <title>Durées</title>
      </Helmet>
      <DurationView />
    </>
  );
};

export default Duration;
