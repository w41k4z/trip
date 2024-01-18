import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useEmployee from "../useEmployee";

const GradeView = () => {
  const { positionsGrades, employees, loading } = useEmployee();

  let positionsGradesOptions: [string, string][] = [["-1", "Choose"]];
  // eslint-disable-next-line array-callback-return
  positionsGrades?.map((positionGrades) => {
    let positionName = positionGrades.position
      ? positionGrades?.position.name
      : "";
    positionsGradesOptions.push([
      positionGrades.id.toString(),
      positionName + " " + positionGrades.grade,
    ]);
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(positionsGradesOptions)}
          indexedRow
          title="Les employés"
          columns={tableColumns}
          data={employees}
        />
      )}
    </>
  );
};

export default GradeView;
