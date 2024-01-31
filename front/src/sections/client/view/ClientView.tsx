import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useClient from "../useClient";

const ClientView = () => {
  const { clients, loading } = useClient();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les clients"
          columns={tableColumns}
          data={clients}
        />
      )}
    </>
  );
};

export default ClientView;
