import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useDuration from "../useDuration";

const DurationView = () => {
  const { durations, loading } = useDuration();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les durées"
          columns={tableColumns}
          data={durations}
        />
      )}
    </>
  );
};

export default DurationView;
