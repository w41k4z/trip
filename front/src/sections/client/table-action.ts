import { TableActionType } from "../../components/datatable/GenericTable";
import { addClient } from "./logic";

export const tableAction: TableActionType = {
  addAction: {
    formTitle: "Ajouter un nouveau client",
    fields: [
      {
        name: "name",
        type: "text",
        label: "Nom",
        options: {
          required: "Le nom d'un nouveau client est obligatoire",
        },
      },
      {
        name: "firstName",
        type: "text",
        label: "Prenom",
      },
      {
        name: "genre",
        label: "Genre",
        type: "select",
        selectValues: [
          ["1", "Femme"],
          ["2", "Homme"],
        ],
      },
      {
        name: "birthDate",
        type: "date",
        label: "Date de naissance",
      },
    ],
    onSubmit: async (data) => {
      addClient(data);
    },
  },
  hasFeature: {
    hasExportPdf: true,
  },
};
