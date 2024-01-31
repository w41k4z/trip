import { TableActionType } from "../../components/datatable/GenericTable";
import { addEmployee } from "./logic";

export const tableAction = (positionOptions: [string, string][]) => {
  const tableAction: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau employé",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Nom",
          options: {
            required: "Le nom d'un nouveau employé est obligatoire",
          },
        },
        {
          name: "firstName",
          type: "text",
          label: "Prenom",
        },
        {
          name: "positionId",
          label: "Poste",
          type: "select",
          selectValues: positionOptions,
        },
        {
          name: "hiringDate",
          label: "Date d'embauche",
          type: "date",
          options: {
            required: "La date d'embauche d'un nouveau employé est obligatoire",
          },
        },
        {
          name: "salary",
          label: "Tarif horaire",
          type: "number",
          step: "0,01",
          options: {
            required:
              "Le tarif horaire d'embauche d'un nouveau employé est obligatoire",
            min: {
              value: 0,
              message: "Le tarif horaire doit etre superieur à 0",
            },
          },
        },
      ],
      onSubmit: async (data) => {
        addEmployee(data);
      },
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return tableAction;
};
