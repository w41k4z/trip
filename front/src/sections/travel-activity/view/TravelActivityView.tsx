import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTravelActivity from "../useTravelActivity";

const TravelActivityView = () => {
  const {
    travels,
    subscriptionTier,
    setCurrentSubscriptionTierId,
    travelActivities,
    loading,
  } = useTravelActivity();

  const travelOptions: [string, string][] = [["", "Choisir"]];
  travels.forEach((travel) => {
    travelOptions.push([travel.id.toString(), travel.name]);
  });

  const activityOptions: [string, string][] = [["", "Choisir"]];
  subscriptionTier?.activities?.forEach((activity) => {
    activityOptions.push([activity.id.toString(), activity.name]);
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(
            setCurrentSubscriptionTierId,
            travels,
            travelOptions,
            activityOptions
          )}
          indexedRow
          title="Les nombre d'activités de voyage"
          columns={tableColumns}
          data={travelActivities}
        />
      )}
    </>
  );
};

export default TravelActivityView;
