import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceItemCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceItems?: InvoiceItemCreateNestedManyWithoutInvoicesInput;
  invoiceNumber?: string | null;
  status?: "Paid" | "Unpaid" | "Pending" | null;
  totalAmount?: string | null;
};
