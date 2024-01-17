import { TableActionType } from "../../components/datatable/GenericTable";
import { addDuration } from "./logic";

export const tableAction: TableActionType = {
  addAction: {
    formTitle: "Ajouter une nouvelle durée",
    fields: [
      {
        name: "label",
        type: "text",
        label: "Label",
        options: {
          required: "Le label d'une nouvelle durée est obligatoire",
        },
      },
    ],
    onSubmit: async (data) => {
      addDuration(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
