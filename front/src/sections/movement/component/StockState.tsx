import useStockState from "./useStockState";
import GenericTable from "../../../components/datatable/GenericTable";
import { tableColumns } from "./table-column";
import { tableAction } from "./table-action";

const StockState = () => {
  const { loading, stocks } = useStockState();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les etats de stocks"
          columns={tableColumns}
          data={stocks}
        />
      )}
    </>
  );
};

export default StockState;
