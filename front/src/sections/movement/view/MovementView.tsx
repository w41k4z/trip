import EntryMovement from "../component/EntryMovement";
import OutflowMovement from "../component/OutflowMovement";
import StockState from "../component/StockState";

const MovementView = () => {
  return (
    <div className="row">
      <EntryMovement className="col-md-6 px-3" />
      <OutflowMovement className="col-md-6 px-3 mb-3" />
      <StockState />
    </div>
  );
};

export default MovementView;
