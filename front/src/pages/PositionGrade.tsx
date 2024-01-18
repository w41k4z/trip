import { Helmet } from "react-helmet-async";
import { PositionGradeView } from "../sections/position-grade/view";

const PositionGrade = () => {
  return (
    <>
      <Helmet>
        <title>Grades des postes</title>
      </Helmet>
      <PositionGradeView />
    </>
  );
};

export default PositionGrade;
