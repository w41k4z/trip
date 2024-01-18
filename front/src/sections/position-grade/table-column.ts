import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Grade",
    propTarget: "grade",
    format: "default",
  },
  {
    name: "Majoration (x 100%)",
    propTarget: "increase",
    format: "number",
  },
];
