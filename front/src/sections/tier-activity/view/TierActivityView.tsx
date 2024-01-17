import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import useTierActivity from "../useTierActivity";

const TierActivityView = () => {
  const {
    activities,
    subscriptionTiers,
    subscriptionTierActivities,
    loading,
    setCurrentTierId,
  } = useTierActivity();
  const subscriptionTierOptions: [string, string][] = [];
  subscriptionTiers.map((tier) =>
    subscriptionTierOptions.push([tier.id.toString(), tier.name])
  );
  const activityOptions: [string, string][] = [];
  activities.map((activity) =>
    activityOptions.push([activity.id.toString(), activity.name])
  );
  const currentTierActivities = subscriptionTierActivities?.activities
    ? subscriptionTierActivities.activities
    : [];

  return (
    <div>
      <header className="d-flex align-items-center mb-5">
        <p className="p-0 m-0 mx-2">Bouquet: </p>
        <select
          className="form-select-sm"
          onChange={(e) => setCurrentTierId(e.target.value)}
        >
          <option value="-1">Choisir</option>
          {subscriptionTierOptions.map((option) => (
            <option value={option.at(0)}>{option.at(1)}</option>
          ))}
        </select>
      </header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction(subscriptionTierOptions, activityOptions)}
          indexedRow
          title="Les bouquets"
          columns={tableColumns}
          data={currentTierActivities}
        />
      )}
    </div>
  );
};

export default TierActivityView;
