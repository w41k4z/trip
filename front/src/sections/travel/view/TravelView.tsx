import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTierActivity from "../useTravel";

const TravelView = () => {
  const { durations, subscriptionTiers, travelCategories, travels, loading } =
    useTierActivity();
  const durationOptions: [string, string][] = [];
  durations.map((duration) =>
    durationOptions.push([duration.id.toString(), duration.label])
  );
  const subscriptionTierOptions: [string, string][] = [];
  subscriptionTiers.map((tier) =>
    subscriptionTierOptions.push([tier.id.toString(), tier.name])
  );
  const travelCategoryOptions: [string, string][] = [];
  travelCategories.map((category) =>
    travelCategoryOptions.push([category.id.toString(), category.category])
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(
            durationOptions,
            travelCategoryOptions,
            subscriptionTierOptions
          )}
          indexedRow
          title="Les voyages"
          columns={tableColumns}
          data={travels}
        />
      )}
    </>
  );
};

export default TravelView;
