import { Helmet } from "react-helmet-async";
import { PositionView } from "../sections/position/view";

const Position = () => {
  return (
    <>
      <Helmet>
        <title>Postes</title>
      </Helmet>
      <PositionView />
    </>
  );
};

export default Position;
