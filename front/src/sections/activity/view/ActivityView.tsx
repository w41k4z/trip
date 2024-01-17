import { BiPlus } from "react-icons/bi";
import GenericTable from "../../../components/datatable/GenericTable";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import ActivityModal from "../component/ActivityModal";
import useActivity from "../useActivity";

const ActivityView = () => {
  const { activities, loading, modalVisibility, showModal, hideModal } =
    useActivity();

  let activityOptions: [string, string][] = [];
  // eslint-disable-next-line array-callback-return
  activities.map((activity) => {
    activityOptions.push([activity.id.toString(), activity.name]);
  });

  return (
    <>
      <header className="mb-5 mt-2">
        <button
          className="d-flex justify-content-start align-items-center mx-1 btn btn-outline-primary"
          onClick={showModal}
        >
          <BiPlus className="me-2" style={{ fontSize: "20px" }} />
          Prix activité
        </button>
        {modalVisibility && (
          <ActivityModal
            hideModal={hideModal}
            activityOptions={activityOptions}
          />
        )}
      </header>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <GenericTable
          hasAction={tableAction}
          indexedRow
          title="Les activités"
          columns={tableColumns}
          data={activities}
        />
      )}
    </>
  );
};

export default ActivityView;
