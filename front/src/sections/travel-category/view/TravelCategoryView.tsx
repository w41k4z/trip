import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTravelCategory from "../useTravelCategory";

const TravelCategoryView = () => {
  const { travelCategories, loading } = useTravelCategory();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les catégories de voyages"
          columns={tableColumns}
          data={travelCategories}
        />
      )}
    </>
  );
};

export default TravelCategoryView;
