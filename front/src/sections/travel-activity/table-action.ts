import { TableActionType } from "../../components/datatable/GenericTable";
import { TravelType } from "../travel/travel";
import { addTravelActivity } from "./logic";

export const tableAction = (
  setCurrentSubscriptionTierId: (id: string) => void,
  travels: TravelType[],
  travelOptions: [string, string][],
  activityOptions: [string, string][]
) => {
  const result: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nombre d'activité à un voyage",
      fields: [
        {
          name: "travelId",
          label: "Voyage",
          type: "select",
          selectValues: travelOptions,
          selectOnChangeEvent: (e) => {
            // eslint-disable-next-line array-callback-return
            travels.map((travel) => {
              if (travel.id.toString() === e.target.value) {
                let subscriptionTierId = travel.subscriptionTier
                  ? travel.subscriptionTier.id
                  : -1;
                setCurrentSubscriptionTierId(subscriptionTierId.toString());
              }
            });
          },
        },
        {
          name: "activityId",
          label: "Activité",
          type: "select",
          selectValues: activityOptions,
        },
        {
          name: "activityCount",
          label: "Nombre d'activités",
          type: "number",
          options: {
            required: "Ce champ est requis",
            min: {
              value: 1,
              message: "Le nombre d'activités doit être supérieur à 0",
            },
          },
        },
      ],
      onSubmit: async (data) => {
        addTravelActivity(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
