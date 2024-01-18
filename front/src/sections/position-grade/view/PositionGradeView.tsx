import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import usePositionGrade from "../usePositionGrade";

const PositionGradeView = () => {
  const { positions, setCurrentPosistionId, positionGrades, loading } =
    usePositionGrade();

  const positionOptions: [string, string][] = [];
  positions.map((position) =>
    positionOptions.push([position.id.toString(), position.name])
  );
  const currentPositionGrades = positionGrades?.positionGrades
    ? positionGrades?.positionGrades
    : [];

  return (
    <div>
      <header className="d-flex align-items-center mb-5">
        <p className="p-0 m-0 mx-2">Poste: </p>
        <select
          className="form-select-sm"
          onChange={(e) => setCurrentPosistionId(e.target.value)}
        >
          <option value="-1">Choisir</option>
          {positionOptions.map((option) => (
            <option value={option.at(0)}>{option.at(1)}</option>
          ))}
        </select>
      </header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(positionOptions)}
          indexedRow
          title="Les grades des positions"
          columns={tableColumns}
          data={currentPositionGrades}
        />
      )}
    </div>
  );
};

export default PositionGradeView;
