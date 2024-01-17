import { TableActionType } from "../../components/datatable/GenericTable";
import { addEmployee } from "./logic";

export const tableAction = (positionGradesOptions: [string, string][]) => {
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
          name: "positionGradeId",
          label: "Poste",
          type: "select",
          selectValues: positionGradesOptions,
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
