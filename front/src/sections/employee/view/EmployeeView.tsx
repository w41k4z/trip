import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useEmployee from "../useEmployee";

const GradeView = () => {
  const { positionGrades, employees, loading } = useEmployee();

  let positionGradesOptions: [string, string][] = [["-1", "Choose"]];
  positionGrades.map((positionGrade) =>
    positionGradesOptions.push([
      positionGrade.id.toString(),
      positionGrade.position.name + " " + positionGrade.grade,
    ])
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(positionGradesOptions)}
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
