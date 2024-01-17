import { Helmet } from "react-helmet-async";
import { TravelCategoryView } from "../sections/travel-category/view";

const TravelCategory = () => {
  return (
    <>
      <Helmet>
        <title>Catégorie de voyage</title>
      </Helmet>
      <TravelCategoryView />
    </>
  );
};

export default TravelCategory;
