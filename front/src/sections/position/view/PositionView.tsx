import { BiPlus } from "react-icons/bi";
import GenericTable from "../../../components/datatable/GenericTable";
import PositionHourlyWageModal from "../component/PositionHourlyWageModal";
import { tableAction } from "../table-action";
import { tableColumns } from "../table-column";
import usePosition from "../usePosition";

const PositionView = () => {
  const { positions, loading, modalVisibility, showModal, hideModal } =
    usePosition();

  let positionOptions: [string, string][] = [["-1", "Choose"]];
  // eslint-disable-next-line array-callback-return
  positions.map((position) => {
    positionOptions.push([position.id.toString(), position.name]);
  });

  return (
    <>
      <header className="mb-5 mt-2">
        <button
          className="d-flex justify-content-start align-items-center mx-1 btn btn-outline-primary"
          onClick={showModal}
        >
          <BiPlus className="me-2" style={{ fontSize: "20px" }} />
          Salaire horaire
        </button>
        {modalVisibility && (
          <PositionHourlyWageModal
            hideModal={hideModal}
            positionOptions={positionOptions}
          />
        )}
      </header>
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
