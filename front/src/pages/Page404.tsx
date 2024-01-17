import { Helmet } from "react-helmet-async";
import { Page404View } from "../sections/404/view";

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>Page 404 not found</title>
      </Helmet>
      <Page404View />
    </>
  );
};

export default Page404;
