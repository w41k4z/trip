import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useGrade from "../useGrade";

const GradeView = () => {
  const { grades, loading } = useGrade();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction()}
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
