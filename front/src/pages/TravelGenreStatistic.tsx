import { Helmet } from "react-helmet-async";
import { GenreStatisticView } from "../sections/genre-statistic/view";

const TravelGenreStatistic = () => {
  return (
    <>
      <Helmet>
        <title>Stats</title>
      </Helmet>
      <GenreStatisticView />
    </>
  );
};

export default TravelGenreStatistic;
