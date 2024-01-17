import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useSubscriptionTier from "../useSubscriptionTier";

const SubscriptionTierView = () => {
  const { subscriptionTiers, loading } = useSubscriptionTier();

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les bouquets"
          columns={tableColumns}
          data={subscriptionTiers}
        />
      )}
    </>
  );
};

export default SubscriptionTierView;
