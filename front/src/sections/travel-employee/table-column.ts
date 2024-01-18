import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Grade",
    propTarget: "employeePositionGrade",
    format: "default",
  },
  {
    name: "Nom",
    propTarget: "employeeName",
    format: "default",
  },
  {
    name: "Prenom",
    propTarget: "employeeFirstName",
    format: "default",
  },
  {
    name: "Durée (heure)",
    propTarget: "duration",
    format: "number",
  },
];
