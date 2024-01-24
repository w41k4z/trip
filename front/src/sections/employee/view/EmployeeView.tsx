import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useEmployee from "../useEmployee";

const EmployeeView = () => {
  const { positions, employees, loading } = useEmployee();

  let positionOptions: [string, string][] = [["-1", "Choose"]];
  // eslint-disable-next-line array-callback-return
  positions?.map((position) => {
    positionOptions.push([position.id.toString(), position.name]);
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(positionOptions)}
          indexedRow
          title="Les employés"
          columns={tableColumns}
          data={employees}
        />
      )}
    </>
  );
};

export default EmployeeView;
