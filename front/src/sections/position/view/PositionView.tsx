import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import usePosition from "../usePosition";

const PositionView = () => {
  const { positions, loading } = usePosition();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les postes"
          columns={tableColumns}
          data={positions}
        />
      )}
    </>
  );
};

export default PositionView;
