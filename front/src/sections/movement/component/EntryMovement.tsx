import useEntryMovement from "./useEntryMovement";
import { addEntryMovement } from "../logic";

const EntryMovement = ({ className = "" }: { className?: string }) => {
  const { register, handleSubmit, reset, activities } = useEntryMovement();

  let activityOptions: [string, string][] = [];
  // eslint-disable-next-line array-callback-return
  activities.map((activity) => {
    activityOptions.push([activity.id.toString(), activity.name]);
  });

  return (
    <form
      className={className}
      onSubmit={handleSubmit((data) => {
        addEntryMovement(data);
        reset();
      })}
    >
      <h2>Entrée</h2>
      <div className="col-auto col-lg-12">
        <label className="form-label" htmlFor="activityId">
          Billet d'activité
        </label>
        <select
          className="form-select"
          id="activityId"
          {...register("activityId")}
        >
          <option value="-1">Choose</option>
          {activityOptions.map((option, index) => {
            return (
              <option key={`option-${index}`} value={option.at(0)}>
                {option.at(1)}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mt-3 col-auto col-lg-12">
        <label className="form-label" htmlFor="quantity">
          Quantité
        </label>
        <input
          className="form-control"
          type="number"
          id="quantity"
          {...register("quantity")}
        />
      </div>
      <div className="mt-3 col-auto col-lg-12">
        <label className="form-label" htmlFor="unitPrice">
          Prix unitaire
        </label>
        <input
          className="form-control"
          type="number"
          step="0.01"
          id="unitPrice"
          {...register("unitPrice")}
        />
      </div>
      <div className="d-flex justify-content-end mt-5">
        <button className="btn btn-outline-dark">Ajouter</button>
      </div>
    </form>
  );
};

export default EntryMovement;
