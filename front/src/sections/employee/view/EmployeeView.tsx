import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useEmployee from "../useEmployee";

const GradeView = () => {
  const { grades, employees, loading } = useEmployee();

  let employeeOptions: [string, string][] = [["-1", "Choose"]];
  employees.map((employee) =>
    employeeOptions.push([employee.id.toString(), employee.name])
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(employeeOptions)}
          indexedRow
          title="Les grades"
          columns={tableColumns}
          data={grades}
        />
      )}
    </>
  );
};

export default GradeView;
