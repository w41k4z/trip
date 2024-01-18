import { Helmet } from "react-helmet-async";
import { MovementView } from "../sections/movement/view";

const Duration = () => {
  return (
    <>
      <Helmet>
        <title>Mouvements</title>
      </Helmet>
      <MovementView />
    </>
  );
};

export default Duration;
