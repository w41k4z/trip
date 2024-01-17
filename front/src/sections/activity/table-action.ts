import { TableActionType } from "../../components/datatable/GenericTable";
import { addActivity } from "./logic";

export const tableAction: TableActionType = {
  addAction: {
    formTitle: "Ajouter une nouvelle activité",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Nom",
        options: {
          required: "Le nom d'une nouvelle activité est obligatoire",
        },
      },
      {
        name: "description",
        type: "text",
        label: "Description",
      },
    ],
    onSubmit: async (data) => {
      addActivity(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
