import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";

export type InvoiceUpdateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;
  status?: "Paid" | "Unpaid" | "Pending" | null;
  totalAmount?: string | null;
};
