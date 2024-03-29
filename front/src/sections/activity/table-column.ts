import { Column } from "../../components/datatable/column";

export const tableColumns: Column[] = [
  {
    name: "Nom",
    propTarget: "name",
    format: "default",
  },
  {
    name: "Description",
    propTarget: "description",
    format: "default",
  },
  {
    name: "Derniere date",
    propTarget: "fromDate",
    format: "date",
  },
  {
    name: "Prix unitaire",
    propTarget: "unitPrice",
    format: "currency",
  },
];
