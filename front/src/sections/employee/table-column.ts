import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Nom",
    propTarget: "name",
    format: "default",
  },
  {
    name: "Prenom",
    propTarget: "firstName",
    format: "default",
  },
  {
    name: "Poste",
    propTarget: "positionGrade",
    format: "default",
  },
  {
    name: "Salaire horaire",
    propTarget: "salary",
    format: "currency",
  },
];
