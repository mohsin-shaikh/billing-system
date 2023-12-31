import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InvoiceItemCreateNestedManyWithoutInvoicesInput } from "./InvoiceItemCreateNestedManyWithoutInvoicesInput";

export type InvoiceCreateInput = {
  customerId?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceItems?: InvoiceItemCreateNestedManyWithoutInvoicesInput;
  status?: "paid" | "unpaid" | "pending" | null;
  totalAmount?: string | null;
};
