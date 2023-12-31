import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  invoiceDate?: SortOrder;
  invoiceNumber?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
