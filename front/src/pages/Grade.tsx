import { Helmet } from "react-helmet-async";
import GradeView from "../sections/grade/view/GradeView";

const Grade = () => {
  return (
    <>
      <Helmet>
        <title>Grades</title>
      </Helmet>
      <GradeView />
    </>
  );
};

export default Grade;
