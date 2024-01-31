import { TableActionType } from "../../components/datatable/GenericTable";

export const tableAction = () => {
  const result: TableActionType = {
    hasFeature: {
      hasExportPdf: true,
    },
  };
  return result;
};
