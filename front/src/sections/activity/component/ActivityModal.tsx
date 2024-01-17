import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addActivityPrice } from "../logic"

type ModalProps = {
  hideModal: () => void;
  activityOptions: [string, string][];
};

const ActivityModal = ({ hideModal, activityOptions }: ModalProps) => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    reset,
  } = useForm();

  return (
    <Modal show onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un nouveau prix d'activité</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit((data) => { addActivityPrice(data) ;reset();})} className="row g-3 px-3 pt-3">
          <div className="col-auto col-lg-12">
            <label className="form-label" htmlFor="activityId">
              Activité
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
          <div className="col-auto col-lg-12">
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
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Ajouter</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ActivityModal;
