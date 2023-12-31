import { SortOrder } from "../../util/SortOrder";

export type InvoiceItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  invoiceIdId?: SortOrder;
  lineTotal?: SortOrder;
  productIdId?: SortOrder;
  quantity?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
