import { TableActionType } from "../../components/datatable/GenericTable";
import { addSubscriptionTier } from "./logic";

export const tableAction: TableActionType = {
  addAction: {
    formTitle: "Ajouter un nouveau bouquet",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Nom",
        options: {
          required: "Le nom d'un nouveau bouquet est obligatoire",
        },
      },
      {
        name: "description",
        type: "text",
        label: "Description",
      },
    ],
    onSubmit: async (data) => {
      addSubscriptionTier(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
