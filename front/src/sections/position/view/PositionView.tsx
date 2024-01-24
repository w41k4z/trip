import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import usePosition from "../usePosition";

const PositionView = () => {
  const { positions, loading } = usePosition();

  let positionOptions: [string, string][] = [["-1", "Choose"]];
  // eslint-disable-next-line array-callback-return
  positions.map((position) => {
    positionOptions.push([position.id.toString(), position.name]);
  });

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
