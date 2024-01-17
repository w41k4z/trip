import EntryMovement from "../component/EntryMovement";
import OutflowMovement from "../component/OutflowMovement";

const MovementView = () => {
  return (
    <div className="row">
      <EntryMovement className="col-md-6 px-3" />
      <OutflowMovement className="col-md-6 px-3" />
    </div>
  );
};

export default MovementView;
