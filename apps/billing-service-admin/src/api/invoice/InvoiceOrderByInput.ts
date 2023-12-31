import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  ID?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  invoiceDate?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
