import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useGenreStatistic from "../useGenreStatistic";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GenreStatisticView = () => {
  const { travels, genreStatistics, setCurrentTravelId, loading } =
    useGenreStatistic();

  let maleEffective = 0;
  let femaleEffective = 0;

  genreStatistics.forEach((stat) => {
    maleEffective += stat.maleEffective;
    femaleEffective += stat.femaleEffective;
  });

  const data = {
    labels: ["male", "female"],
    datasets: [
      {
        label: "# of Votes",
        data: [maleEffective, femaleEffective],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <header className="d-flex align-items-center mb-5">
        <p className="p-0 m-0 mx-2">Voyage: </p>
        <select
          className="form-select-sm"
          onChange={(e) => setCurrentTravelId(e.target.value)}
        >
          <option value="-1">Choisir</option>
          {travels.map((travel, index) => (
            <option key={index} value={travel.id}>
              {travel.name}
            </option>
          ))}
        </select>
      </header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction()}
          indexedRow
          title="Les stats"
          columns={tableColumns}
          data={genreStatistics}
        />
      )}
      <section className="d-flex justify-content-center">
        <div className="chart" style={{ width: "300px", height: "300px" }}>
          <Pie data={data} />;
        </div>
      </section>
    </>
  );
};

export default GenreStatisticView;
