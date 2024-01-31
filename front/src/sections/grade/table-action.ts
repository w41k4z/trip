import { TableActionType } from "../../components/datatable/GenericTable";
import { addGrade, updateGrade } from "./logic";

export const tableAction = () => {
  const result: TableActionType = {
    addAction: {
      formTitle: "Ajouter un nouveau grade à un poste",
      fields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          options: {
            required: "Le nom est requis",
          },
        },
        {
          name: "increase",
          label: "Majoration (%)",
          type: "number",
          step: ".01",
          options: {
            required: "La majoration est requise",
            min: {
              value: 0,
              message: "La majoration minimum doit etre superieur ou egale à 0",
            },
          },
        },
        {
          name: "fromDuration",
          label: "EXP minimum",
          type: "number",
          step: "0.1",
          options: {
            required: "La durée minimum est requise",
            min: {
              value: 0,
              message: "La durée minimum doit etre superieur ou egale à 0",
            },
          },
        },
        {
          name: "toDuration",
          label: "EXP maximum",
          type: "number",
          step: "0.1",
        },
      ],
      onSubmit: async (data) => {
        addGrade(data);
      },
    },
    updateAction: (data) => {
      return {
        title: "Modifier un grade",
        fields: [
          {
            name: "gradeId",
            type: "number",
            hidden: true,
            defaultValue: data.id,
          },
          {
            name: "name",
            label: "Nom",
            type: "text",
            defaultValue: data.name,
          },
          {
            name: "increase",
            label: "Majoration (x 100%)",
            type: "number",
            step: ".01",
            defaultValue: data.increase,
          },
          {
            name: "fromDuration",
            label: "EXP minimum",
            type: "number",
            step: "0.1",
            defaultValue: data.fromDuration,
          },
          {
            name: "toDuration",
            label: "EXP maximum",
            type: "number",
            step: "0.1",
            defaultValue: data.toDuration,
          },
        ],
        onSubmit: updateGrade,
      };
    },
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
