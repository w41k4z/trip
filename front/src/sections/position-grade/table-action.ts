import { TableActionType } from "../../components/datatable/GenericTable";
import { addTierActivity } from "./logic";

export const tableAction = (
  subscriptionTierOptions: [string, string][],
  activityOptions: [string, string][]
) => {
  const result: TableActionType = {
    addAction: {
      formTitle: "Ajouter une nouvelle activité à un bouquet",
      fields: [
        {
          name: "subscriptionTierId",
          label: "Bouquet",
          type: "select",
          selectValues: subscriptionTierOptions,
        },
        {
          name: "activityId",
          label: "Activité",
          type: "select",
          selectValues: activityOptions,
        },
      ],
      onSubmit: async (data) => {
        addTierActivity(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
